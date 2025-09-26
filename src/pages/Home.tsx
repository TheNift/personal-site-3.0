import Page from '@components/Page';
import ScrambleText from '@components/ScrambleText';
import { useLanguage } from '@contexts/LanguageContext';
import { Suspense } from 'react';

const StaticContent = () => (
	<>
		<h1 className="text-[100px] text-yorha font-doto tracking-tighter font-bold">
			Jack Kill
		</h1>
		<p className="text-yorha/60 text-md font-medium">Sofware Engineer</p>
	</>
);

const DynamicContent = () => {
	const { strings } = useLanguage();

	return (
		<>
			<h1 className="text-[100px] text-yorha font-doto tracking-tighter font-bold">
				<ScrambleText scramble={8}>{strings.ui.siteTitle}</ScrambleText>
			</h1>
			<p className="text-yorha/60 text-md font-medium">
				<ScrambleText scramble={10}>
					{strings.ui.siteDescription}
				</ScrambleText>
			</p>
		</>
	);
};

function Home() {
	return (
		<Page className="flex flex-col items-center justify-start p-4 w-full h-full">
			<Suspense fallback={<StaticContent />}>
				<DynamicContent />
			</Suspense>
		</Page>
	);
}

export default Home;
