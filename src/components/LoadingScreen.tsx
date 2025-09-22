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
		<div className="h-screen w-screen bg-yorha-dark flex flex-col items-center justify-center relative overflow-hidden">
			<div className="absolute inset-0 opacity-10">
				<div
					className="w-full h-full"
					style={{
						backgroundImage: `
							linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%),
							linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)
						`,
						backgroundSize: '20px 20px',
					}}
				/>
			</div>

			<div className="relative z-10 flex flex-col items-center gap-8">
				<motion.div
					className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full"
					animate={{ rotate: 360 }}
					transition={{
						duration: 1,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-center"
				>
					<h2 className="text-2xl font-bold text-white mb-2">
						{strings.ui.loading.title}
					</h2>
					<p className="text-white/60 text-sm">{randomMessage}</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="w-64 h-2 bg-white/10 rounded-full overflow-hidden"
				>
					<motion.div
						className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full origin-left"
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

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
				{[0, 1, 2].map((i) => (
					<motion.div
						key={i}
						className="w-2 h-2 bg-white/40 rounded-full"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.4, 0.8, 0.4],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							delay: i * 0.2,
							ease: 'easeInOut',
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default LoadingScreen;
