import { useLanguage } from '@contexts/LanguageContext';
import { motion } from 'motion/react';
import { useMemo } from 'react';

interface LoadingScreenProps {
	progress: number;
}

const LoadingScreen = ({ progress }: LoadingScreenProps) => {
	const { strings } = useLanguage();
	const messages = strings.ui.loading.messages;
	const randomMessage = useMemo(
		() => messages[Math.floor(Math.random() * messages.length)],
		[messages]
	);
	return (
		<div className="relative overflow-hidden rounded-t-lg bg-yorha-dark/50 border border-white/20 backdrop-blur-lg p-4">
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="text-center"
			>
				<h2 className="text-xl font-bold text-white mb-1">
					{strings.ui.loading.title}
				</h2>
				<p className="text-white/60 text-sm">{randomMessage}</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="w-48 h-2 bg-white/10 rounded-full overflow-hidden"
			>
				<motion.div
					className="h-full w-full bg-gradient-to-r from-green-400 to-green-600 rounded-full origin-left"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: progress / 100 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className="text-white/80 text-sm font-mono"
			>
				{Math.round(progress)}%
			</motion.div>
		</div>
	);
};

export default LoadingScreen;
