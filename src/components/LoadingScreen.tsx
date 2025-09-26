import { useLanguage } from '@contexts/LanguageContext';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { useBackground } from '@contexts/BackgroundContext';

const LoadingScreen = () => {
	const { strings } = useLanguage();
	const messages = useMemo(() => strings.ui.loading.messages, [strings]);
	const randomMessage = useMemo(
		() => messages[Math.floor(Math.random() * messages.length)],
		[messages]
	);
	const { loadingProgress } = useBackground();
	return (
		<div className="relative overflow-hidden bg-yorha/90 rounded-t-lg backdrop-blur-lg px-4 py-2">
			<div className="text-center">
				<h2 className="text-xl font-bold text-yorha-dark mb-1">
					{strings.ui.loading.title}
				</h2>
				<p className="text-yorha-dark text-sm">{randomMessage}</p>
			</div>

			<div className="flex items-center justify-center">
				<div className="w-48 h-2 bg-yorha-dark/50 rounded-full overflow-hidden mr-3">
					<motion.div
						className="h-full w-full bg-gradient-to-r from-green-400 to-green-600 rounded-full origin-left"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: loadingProgress / 100 }}
						transition={{ duration: 0.1, ease: 'easeInOut' }}
					/>
				</div>
				<div className="text-yorha-dark text-sm font-mono">
					{Math.round(loadingProgress)}%
				</div>
			</div>
		</div>
	);
};

export default LoadingScreen;
