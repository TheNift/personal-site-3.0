import { useGLTF } from '@react-three/drei';
import { getAllAssetPaths } from './assetRegistry';

interface LoadingProgress {
	(progress: number): void;
}

export const preloadThreeJSAssets = async (
	onProgress: LoadingProgress
): Promise<void> => {
	const assetPaths = getAllAssetPaths();

	let itemsLoaded = 0;
	const totalItems = assetPaths.length;

	const loadPromises = assetPaths.map(async (path, index) => {
		try {
			await new Promise(resolve => setTimeout(resolve, index * 20)); // Feels bad, but staggering the loading to be nicer to webgl
			useGLTF.preload(path);
			itemsLoaded++;
			const progress = (itemsLoaded / totalItems) * 100;
			onProgress(progress);
		} catch (error: any) {
			console.error(`Failed to preload ${path}:`, error);
			itemsLoaded++;
			const progress = (itemsLoaded / totalItems) * 100;
			onProgress(progress);
		}
	});

	await Promise.all(loadPromises);
	onProgress(100);
};
