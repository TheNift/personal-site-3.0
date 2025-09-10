import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { useMemo } from 'react';
import strings from '@data/strings';
import AnimatedOutlet from '@components/AnimatedOutlet';
import BackgroundScene from '@components/BackgroundScene';
import { useBackground } from '@contexts/BackgroundContext';

function GlobalUI() {
	return (
		<div className="h-screen w-screen relative">
			<div className="relative h-full w-full z-10 flex flex-col items-center justify-center">
				<NavUI />
				<AnimatedOutlet />
			</div>
			<BackgroundRender />
		</div>
	);
}

function NavUI() {
	const { setCameraPosition } = useBackground();
	const LinkItem = ({
		to,
		keyString,
		title,
		index,
	}: {
		to: string;
		keyString: string;
		title: string;
		index?: number;
	}) => {
		const delay = index ? index * 0.1 : 0;
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3, ease: 'easeInOut', delay: delay }}
				key={keyString}
				className="flex items-center justify-center w-full grow"
			>
				<Link
					to={to}
					className="text-2xl font-bold btn w-full"
					key={keyString}
					onClick={() => {
						setCameraPosition(index ?? 0);
					}}
				>
					{title}
				</Link>
			</motion.div>
		);
	};
	const navItems = strings.ui.nav.map((item, index) => (
		<AnimatePresence
			mode="wait"
			propagate={true}
			key={`nav-${item.text}-wrapper`}
		>
			<LinkItem
				to={item.to}
				keyString={item.text}
				title={item.text}
				index={index}
			/>
		</AnimatePresence>
	));
	return (
		<div className="flex flex-col gap-2 absolute z-999 left-0 top-1/2 -translate-y-1/2">
			{navItems}
		</div>
	);
}

function BackgroundRender() {
	return (
		<div className="absolute inset-0 z-0 bg-yorha">
			<BackgroundScene />
		</div>
	);
}

export default GlobalUI;
