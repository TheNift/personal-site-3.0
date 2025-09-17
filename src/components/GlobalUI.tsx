import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useCallback, memo, useMemo } from 'react';
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

const MemoizedLinkItem = memo(
	({
		to,
		keyString,
		title,
		index,
		onMouseEnter,
		onMouseLeave,
	}: {
		to: string;
		keyString: string;
		title: string;
		index?: number;
		onMouseEnter: (index: number) => void;
		onMouseLeave: () => void;
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
					onMouseEnter={() => {
						onMouseEnter(index ?? 0);
					}}
					onMouseLeave={() => {
						onMouseLeave();
					}}
				>
					{title}
				</Link>
			</motion.div>
		);
	}
);

MemoizedLinkItem.displayName = 'MemoizedLinkItem';

function NavUI() {
	const { setCameraPosition, currentPageIndex } = useBackground();

	const handleMouseEnter = useCallback(
		(index: number) => {
			setCameraPosition(index);
		},
		[setCameraPosition]
	);

	const handleMouseLeave = useCallback(() => {
		setCameraPosition(currentPageIndex);
	}, [setCameraPosition, currentPageIndex]);

	const navItems = useMemo(
		() =>
			strings.ui.nav.map((item, index) => (
				<MemoizedLinkItem
					key={`nav-${item.text}`}
					to={item.to}
					keyString={item.text}
					title={item.text}
					index={index}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
			)),
		[handleMouseEnter, handleMouseLeave]
	);

	return (
		<div className="flex flex-col gap-2 absolute z-999 left-0 top-1/2 -translate-y-1/2">
			{navItems}
		</div>
	);
}

function BackgroundRender() {
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
