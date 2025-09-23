import { useScramble } from 'use-scramble';

interface ScrambleTextProps {
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
	speed?: number;
	tick?: number;
	step?: number;
	scramble?: number;
}

function ScrambleText({
	className,
	style,
	children,
	speed,
	tick,
	step,
	scramble,
}: ScrambleTextProps) {
	const { ref } = useScramble({
		text: String(children),
		speed: speed ?? 0.5,
		tick: tick ?? 5,
		step: step ?? 5,
		scramble: scramble ?? 2,
	});

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
		></span>
	);
}

export default ScrambleText;
