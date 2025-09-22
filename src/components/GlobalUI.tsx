import { useLanguage } from '@contexts/LanguageContext';
import AnimatedOutlet from '@components/AnimatedOutlet';
import BackgroundScene from '@components/BackgroundScene';
import LanguageToggle from '@components/LanguageToggle';
import NavUI from '@components/NavUI';

function GlobalUI() {
	return (
		<div className="h-screen w-screen relative">
			<div className="relative h-full w-full z-10 flex flex-col items-center justify-center">
				<NavUI />
				<div className="absolute bottom-4 right-4 z-50">
					<LanguageToggle />
				</div>
				<AnimatedOutlet />
			</div>
			<BackgroundRender />
		</div>
	);
}

function BackgroundRender() {
	const { strings } = useLanguage();

	return (
		<div
			className="absolute inset-0 z-0"
			style={{ backgroundColor: strings.colors.siteBg }}
		>
			<BackgroundScene />
		</div>
	);
}

export default GlobalUI;
