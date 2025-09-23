import { useLanguage } from '@contexts/LanguageContext';
import Page from '@components/Page';
import { motion } from 'motion/react';
import ScrambleText from '@components/ScrambleText';

function Experience() {
	const { strings } = useLanguage();

	return (
		<Page className="flex flex-col items-center justify-center p-4">
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -100 }}
				transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
				className="relative my-[50px] h-full"
			>
				<div className="h-full w-full z-5 flex flex-col items-center justify-start aspect-[8.5/11] p-4 bg-yorha relative drop-shadow-lg overflow-y-scroll">
					<h1 className="text-3xl font-bold underline mb-4">
						<ScrambleText>{strings.experience.title}</ScrambleText>
					</h1>
				</div>
				<BackgroundPages amount={3} />
			</motion.div>
		</Page>
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
			animate={{ opacity: 1, x: 0, rotate: -5 * (index + 1) }}
			exit={{ opacity: 0, x: -100 }}
			transition={{
				duration: 0.5,
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
