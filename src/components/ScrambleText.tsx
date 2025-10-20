import { useScramble } from 'use-scramble';
import { useEffect, useRef, useState } from 'react';

interface ScrambleTextProps {
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
	speed?: number;
	tick?: number;
	step?: number;
	scramble?: number;
	overdrive?: boolean | number;
	preventLayoutShift?: boolean;
}

function ScrambleText({
	className,
	style,
	children,
	speed,
	tick,
	step,
	scramble,
	overdrive,
	preventLayoutShift = false,
}: ScrambleTextProps) {
	const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);
	const measureRef = useRef<HTMLSpanElement>(null);
	const textContent = String(children);

	useEffect(() => {
		if (preventLayoutShift && measureRef.current) {
			const width = measureRef.current.getBoundingClientRect().width;
			setMeasuredWidth(width);
		}
	}, [textContent, preventLayoutShift]);

	const { ref } = useScramble({
		text: textContent,
		speed: speed ?? 0.5,
		tick: tick ?? 5,
		step: step ?? 5,
		scramble: scramble ?? 2,
		overdrive: overdrive ?? false,
	});

	if (preventLayoutShift) {
		return (
			<>
				<span
					ref={measureRef}
					aria-hidden="true"
					style={{
						position: 'absolute',
						visibility: 'hidden',
						whiteSpace: 'nowrap',
						fontFamily: 'inherit',
						fontSize: 'inherit',
						fontStyle: 'inherit',
						fontWeight: 'inherit',
						...style,
					}}
				>
					{textContent}
				</span>

				<span
					ref={ref}
					className={className}
					style={{
						fontFamily: 'inherit',
						fontSize: 'inherit',
						fontStyle: 'inherit',
						fontWeight: 'inherit',
						display: 'inline-block',
						minWidth: measuredWidth ? `${measuredWidth}px` : 'auto',
						fontVariantNumeric: 'tabular-nums',
						...style,
					}}
				>
					{textContent}
				</span>
			</>
		);
	}

	return (
		<span
			ref={ref}
			className={className}
			style={{
				fontFamily: 'inherit',
				fontSize: 'inherit',
				fontStyle: 'inherit',
				fontWeight: 'inherit',
				...style,
			}}
		>
			{textContent}
		</span>
	);
}

export default ScrambleText;
