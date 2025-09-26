import React from 'react';
import { motion } from 'motion/react';

function Button({
	children,
	onClick,
	ariaLabel,
	title,
	className,
	style,
	delay,
}: {
	children: React.ReactNode;
	onClick: () => void;
	ariaLabel?: string;
	title?: string;
	className?: string;
	style?: React.CSSProperties;
	delay?: number;
}) {
	return (
		<motion.button
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3, delay: delay ?? 0 }}
			onClick={() => {
				onClick();
			}}
			className={`btn ${className ?? ''}`}
			aria-label={ariaLabel ?? ''}
			title={title ?? ''}
			style={style}
		>
			{children}
		</motion.button>
	);
}

export default Button;
