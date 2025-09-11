import { useState, useEffect } from 'react';
import GlobalUI from '@components/GlobalUI';
import LoadingScreen from '@components/LoadingScreen';

const LoadingHandler = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadingProgress, setLoadingProgress] = useState(0);

	useEffect(() => {
		const loadScene = async () => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 100));
				setLoadingProgress(20);

				await import('@components/BackgroundScene');
				setLoadingProgress(30);

				const { preloadThreeJSAssets } = await import(
					'@utils/sceneLoader'
				);
				setLoadingProgress(40);

				await preloadThreeJSAssets((progress) => {
					setLoadingProgress(40 + progress * 50);
				});

				setLoadingProgress(100);

				await new Promise((resolve) => setTimeout(resolve, 300));

				setIsLoading(false);
			} catch (error) {
				console.error('Error loading 3D scene:', error);
				setLoadingProgress(100);
				setTimeout(() => setIsLoading(false), 500);
			}
		};

		if ('requestIdleCallback' in window) {
			requestIdleCallback(loadScene);
		} else {
			setTimeout(loadScene, 0);
		}
	}, []);

	if (isLoading) {
		return <LoadingScreen progress={loadingProgress} />;
	}

	return <GlobalUI />;
};

export default LoadingHandler;
