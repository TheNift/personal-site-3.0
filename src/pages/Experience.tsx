import { useLanguage } from '@contexts/LanguageContext';
import Page from '@components/Page';
import { motion } from 'motion/react';
import ScrambleText from '@components/ScrambleText';
import { useUI } from '@/contexts/UIContext';

function Experience() {
	const { strings } = useLanguage();
	const { isContentHidden } = useUI();
	return (
		<Page className="flex flex-col items-center justify-center p-4">
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={{
					opacity: isContentHidden ? 0 : 1,
					x: 0,
				}}
				exit={{ opacity: 0, x: -100 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				className="relative my-[50px] h-full"
			>
				<div className="h-full w-full z-5 flex flex-col items-center justify-start aspect-[8.5/11] max-w-[96vw] p-4 bg-yorha relative drop-shadow-lg overflow-y-scroll shadow-[0_0_20px_rgba(0,0,0,0.9)] experience-scrollbar">
					<h1 className="text-3xl font-bold underline mb-4 text-yorha-dark">
						<ScrambleText preventLayoutShift>
							{strings.experience.title}
						</ScrambleText>
					</h1>
					<ExperienceItems />
				</div>
				<BackgroundPages amount={3} />
			</motion.div>
		</Page>
	);
}

function ExperienceItems() {
	const { strings } = useLanguage();
	return (
		<>
			{strings.experience.items.map((item, index) => (
				<ExperienceItem key={index} item={item} />
			))}
		</>
	);
}
function ExperienceItem({ item }: { item: any }) {
	const { language } = useLanguage();
	return (
		<div className="flex flex-col justify-start align-start not-last:mb-[50px]">
			<h2
				className={`text-2xl ${language === 'eng' ? 'font-doto font-[900]' : 'font-jetbrains-mono font-semibold'}`}
			>
				<ScrambleText className="font-doto font-[900]">
					{item.company}
				</ScrambleText>
			</h2>
			<div className="flex flex-row justify-between align-center border-b border-yorha-dark/50 pb-2 mb-2">
				<h3 className="text-md">
					<ScrambleText>{item.role}</ScrambleText>
				</h3>
				<div className="flex flex-col justify-end align-center text-sm">
					<p>
						<ScrambleText>{item.date}</ScrambleText>
					</p>
					<p>
						<ScrambleText>{item.location}</ScrambleText>
					</p>
				</div>
			</div>
			<ul className="list-disc list-inside text-sm">
				{item.lines.map((line: string, index: number) => (
					<li key={index}>
						<ScrambleText
							speed={1}
							step={20}
							scramble={2}
							overdrive={true}
						>
							{line}
						</ScrambleText>
					</li>
				))}
			</ul>
		</div>
	);
}

function BackgroundPages({ amount }: { amount: number }) {
	return (
		<>
			{Array.from({ length: amount }).map((_, index) => (
				<BackgroundPage key={index} index={index} />
			))}
		</>
	);
}

function BackgroundPage({ index }: { index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100, rotate: 0 }}
			animate={{ opacity: 1, x: 0, rotate: -2 * (index + 1) }}
			exit={{ opacity: 0, x: -100 }}
			transition={{
				duration: 0.3,
				ease: 'easeInOut',
				delay: index * 0.1 + 0.1,
			}}
			className="absolute top-0 left-0 flex flex-col items-center justify-start aspect-[8.5/11] h-full bg-yorha drop-shadow-lg"
			style={{
				zIndex: 1 - index,
			}}
		/>
	);
}

export default Experience;
