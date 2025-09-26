import { motion, AnimatePresence } from 'motion/react';
import { useBackground } from '@contexts/BackgroundContext';

function Page({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const { isAssetsLoading } = useBackground();
	return (
		<motion.div
			initial={{ opacity: isAssetsLoading ? 1 : 0 }} // The idea is if assets are loading, it's the initial page load, so to improve LCP and FCP we show the page instantly
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 0.3,
				ease: 'easeInOut',
			}}
			className={`w-full h-full`}
		>
			<AnimatePresence mode="wait">
				<div
					key={location.pathname}
					className={`w-full h-full ${className}`}
				>
					{children}
				</div>
			</AnimatePresence>
		</motion.div>
	);
}

export default Page;
