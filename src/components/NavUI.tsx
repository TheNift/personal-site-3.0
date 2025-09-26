import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useCallback, memo, useMemo, useState } from 'react';
import { useLanguage } from '@contexts/LanguageContext';
import ScrambleText from '@components/ScrambleText';
import { useBackground } from '@contexts/BackgroundContext';
import { useUI } from '@/contexts/UIContext';

const MemoizedLinkItem = memo(
	({
		to,
		keyString,
		title,
		index,
		onMouseEnter,
		onMouseLeave,
		onClick,
	}: {
		to: string;
		keyString: string;
		title: string;
		index?: number;
		onMouseEnter: (index: number) => void;
		onMouseLeave: () => void;
		onClick?: () => void;
	}) => {
		const baseDelay = useMemo(() => (index ? index * 0.1 : 0), [index]);
		const width = 300 - (index ?? 0) * 16;
		const [isHovered, setIsHovered] = useState(false);
		const [delay, setDelay] = useState(baseDelay);
		const { currentPageIndex } = useBackground();
		const isCurrent = useMemo(
			() => index === currentPageIndex,
			[index, currentPageIndex]
		);
		return (
			<motion.div
				initial={{ opacity: 0, width: 0 }}
				animate={{
					opacity: 1,
					width: isHovered || isCurrent ? width + 20 : width,
				}}
				exit={{ opacity: 0, width: 0 }}
				transition={{
					duration: 0.1,
					ease: 'easeInOut',
					delay: delay,
				}}
				key={keyString}
				className="flex items-center justify-center grow relative"
				onAnimationComplete={() => {
					setDelay(0);
				}}
			>
				<Link
					to={to}
					className="text-2xl font-bold w-full menu-btn z-5"
					key={keyString}
					onMouseEnter={(e) => {
						onMouseEnter(index ?? 0);
						setIsHovered(true);
						e.currentTarget.classList.add('selected');
					}}
					onMouseLeave={(e) => {
						onMouseLeave();
						e.currentTarget.classList.remove('selected');
						setIsHovered(false);
					}}
					onClick={onClick}
					draggable={false}
				>
					<ScrambleText
						speed={0.5}
						step={10}
						scramble={5 + (index ?? 0) * 2}
					>
						{title}
					</ScrambleText>
				</Link>
				<motion.div
					className="absolute inset-[1px] bg-brown z-2 skew-x-[-15deg] translate-x-[-10px]"
					initial={{ width: 0 }}
					animate={{ width: isHovered || isCurrent ? '100%' : 0 }}
					exit={{ width: 0 }}
					transition={{
						duration: 0.3,
						ease: 'easeInOut',
					}}
				/>
			</motion.div>
		);
	}
);

MemoizedLinkItem.displayName = 'MemoizedLinkItem';

function NavUI() {
	const { setCameraPosition, currentPageIndex } = useBackground();
	const { strings } = useLanguage();
	const { setContentHidden } = useUI();
	const handleMouseEnter = useCallback(
		(index: number) => {
			setCameraPosition(index);
			if (index !== currentPageIndex) {
				setContentHidden(true);
			}
		},
		[setCameraPosition, setContentHidden, currentPageIndex]
	);

	const handleMouseLeave = useCallback(() => {
		setCameraPosition(currentPageIndex);
		setContentHidden(false);
	}, [setCameraPosition, currentPageIndex, setContentHidden]);

	const handleClick = useCallback(() => {
		setTimeout(() => {
			setContentHidden(false);
		}, 100);
	}, [setContentHidden]);

	const navItems = useMemo(
		() =>
			strings.ui.nav.map((item, index) => (
				<MemoizedLinkItem
					key={`nav-${index}-${item.to}`}
					to={item.to}
					keyString={`nav-${index}-${item.to}`}
					title={item.text}
					index={index}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onClick={handleClick}
				/>
			)),
		[handleMouseEnter, handleMouseLeave, strings.ui.nav]
	);

	return (
		<div
			className="flex flex-col absolute z-999 left-0 top-1/3 -translate-y-1/2"
			style={{
				height: navItems.length * 56 + 'px',
			}}
		>
			{navItems}
		</div>
	);
}

export default NavUI;
