import AnimatedOutlet from '@components/AnimatedOutlet';
import LanguageToggle from '@components/LanguageToggle';
import NavUI from '@components/NavUI';
import { lazy, Suspense } from 'react';
import LoadingScreen from './LoadingScreen';

const BackgroundScene = lazy(() => import('@components/BackgroundScene'));

function GlobalUI({
	showLoadingModal,
	loadingProgress,
}: {
	showLoadingModal: boolean;
	loadingProgress: number;
}) {
	return (
		<div className="h-screen w-screen relative">
			<div className="relative h-full w-full z-40 flex flex-col items-center justify-center">
				<NavUI />
				<div className="absolute bottom-4 right-4 z-50">
					<LanguageToggle />
				</div>
				<AnimatedOutlet />
			</div>
			{showLoadingModal && (
				<div className="absolute z-30 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
					<LoadingScreen progress={loadingProgress} />
				</div>
			)}
			<div className="absolute inset-0 z-0 bg-site-bg">
				<Suspense
					fallback={<div className="w-full h-full bg-inherit" />}
				>
					<BackgroundScene />
				</Suspense>
			</div>
		</div>
	);
}

export default GlobalUI;
