import Page from '@components/Page';
import { useLanguage } from '@contexts/LanguageContext';
import ScrambleText from '@components/ScrambleText';
import { AnimatePresence, motion } from 'motion/react';
import moment from 'moment';
import { useCallback, useState, useEffect } from 'react';

function About() {
	return (
		<Page className="flex flex-col items-center justify-start p-4 w-full h-full relative">
			<h1 className="text-[50px] sm:text-[75px] lg:text-[100px] mb-2 text-yorha font-doto font-[800]">
				<ScrambleText scramble={8} preventLayoutShift>
					About
				</ScrambleText>
			</h1>
			<AboutCards />
		</Page>
	);
}

function AboutCards() {
	const { strings } = useLanguage();
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 overflow-y-auto overflow-x-hidden gap-[30px] items-stretch lg:ml-[304px]">
			<AnimatePresence mode="wait">
				{Object.entries(strings.about.items).map(
					([key, value], index) => (
						<AboutCard
							key={key}
							title={key}
							items={value}
							index={index}
						/>
					)
				)}
			</AnimatePresence>
		</div>
	);
}

function AboutCard({
	title,
	items,
	index,
}: {
	title: string;
	items: any;
	index: number;
}) {
	if (Array.isArray(items)) {
		return (
			<motion.div
				className="flex flex-col justify-start align-start text-yorha w-120 h-full"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.3,
					ease: 'easeInOut',
					delay: index * 0.1,
				}}
			>
				<h2 className="text-2xl font-bold font-jetbrains-mono">
					<ScrambleText preventLayoutShift>{title}</ScrambleText>
				</h2>
				<ul className="list-disc list-inside mt-2">
					{items.map((item: string) => (
						<li className="text-sm sm:text-md" key={item}>
							<ScrambleText
								speed={1}
								step={4}
								scramble={2}
								overdrive={true}
							>
								{item}
							</ScrambleText>
						</li>
					))}
				</ul>
			</motion.div>
		);
	} else {
		return (
			<motion.div
				className="flex flex-col justify-start align-start text-yorha w-120 h-full"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.3,
					ease: 'easeInOut',
					delay: index * 0.1,
				}}
			>
				<h2 className="text-2xl font-bold mb-2 font-jetbrains-mono">
					<ScrambleText preventLayoutShift>{title}</ScrambleText>
				</h2>
				<ul className="list-disc list-inside">
					{Object.entries(items).map(([key, value]) => (
						<li className="text-sm" key={key}>
							<span className="font-bold">
								<ScrambleText
									speed={1}
									step={4}
									scramble={2}
									overdrive={true}
								>
									{key}
								</ScrambleText>
								:
							</span>{' '}
							{key.toLowerCase() === 'age' ? (
								CalculateAge(value as string)()
							) : key.toLowerCase() === 'years of experience' ? (
								CalculatePreciseAge(value as string)()
							) : (
								<ScrambleText
									speed={1}
									step={4}
									scramble={2}
									overdrive={true}
								>
									{value as string}
								</ScrambleText>
							)}
						</li>
					))}
				</ul>
			</motion.div>
		);
	}
}

function CalculateAge(value: string) {
	return useCallback(() => {
		return moment().diff(value, 'years', false).toString();
	}, [value]);
}

function CalculatePreciseAge(value: string) {
	const [currentTime, setCurrentTime] = useState(moment());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(moment());
		}, 30);

		return () => clearInterval(interval);
	}, []);

	return useCallback(() => {
		return currentTime.diff(value, 'years', true).toFixed(9).toString();
	}, [value, currentTime]);
}

export default About;
