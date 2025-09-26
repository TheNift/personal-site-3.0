import { useScramble } from 'use-scramble';

interface ScrambleTextProps {
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
	speed?: number;
	tick?: number;
	step?: number;
	scramble?: number;
	overdrive?: boolean | number;
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
}: ScrambleTextProps) {
	const { ref } = useScramble({
		text: String(children),
		speed: speed ?? 0.5,
		tick: tick ?? 5,
		step: step ?? 5,
		scramble: scramble ?? 2,
		overdrive: overdrive ?? false,
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
		>
			{String(children)}
		</span>
	);
}

export default ScrambleText;
