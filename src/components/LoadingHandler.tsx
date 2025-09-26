import { useState, useEffect } from 'react';
import GlobalUI from '@components/GlobalUI';

const LoadingHandler = () => {
	const [isAssetsLoading, setIsAssetsLoading] = useState(true);
	const [loadingProgress, setLoadingProgress] = useState(0);

	useEffect(() => {
		const loadScene = async () => {
			try {
				setLoadingProgress(10);

				import('@components/BackgroundScene').then(() => {
					setLoadingProgress(20);

					import('@utils/sceneLoader').then(
						({ preloadThreeJSAssets }) => {
							setLoadingProgress(30);

							preloadThreeJSAssets((progress) => {
								setLoadingProgress(30 + (progress * 70) / 100);
							}).finally(() => {
								setIsAssetsLoading(false);
							});
						}
					);
				});
			} catch (error) {
				console.error('Error loading 3D scene:', error);
				setLoadingProgress(100);
				setIsAssetsLoading(false);
			}
		};

		if ('requestIdleCallback' in window) {
			requestIdleCallback(loadScene);
		} else {
			setTimeout(loadScene, 0);
		}
	}, []);

	return (
		<>
			<GlobalUI
				showLoadingModal={isAssetsLoading}
				loadingProgress={loadingProgress}
			/>
		</>
	);
};

export default LoadingHandler;
