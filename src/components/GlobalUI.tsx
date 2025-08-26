import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import strings from '@data/strings';
import AnimatedOutlet from '@components/AnimatedOutlet';

function GlobalUI() {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen relative border-2 border-pink-500">
			<NavUI />
			<AnimatedOutlet />
		</div>
	);
}

function NavUI() {
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
				className="flex items-center justify-center w-full grow border-2 border-yellow-500"
			>
				<Link to={to} className="text-2xl font-bold" key={keyString}>
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
		<div className="flex flex-col gap-2 absolute z-999 left-0 top-1/2 -translate-y-1/2 border-2 border-green-500">
			{navItems}
		</div>
	);
}

export default GlobalUI;
