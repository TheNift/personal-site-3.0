import { useEffect } from 'react';
import GlobalUI from '@components/GlobalUI';
import { useBackground } from '@contexts/BackgroundContext';

const LoadingHandler = () => {
	const { setIsAssetsLoading, setLoadingProgress } = useBackground();
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
	}, [setIsAssetsLoading, setLoadingProgress]);

	return (
		<>
			<GlobalUI />
		</>
	);
};

export default LoadingHandler;
