import Page from '@components/Page';
import ScrambleText from '@components/ScrambleText';
import { useLanguage } from '@contexts/LanguageContext';

function Home() {
	const { strings } = useLanguage();

	return (
		<Page className="flex flex-col items-center justify-start p-4 w-full h-full pt-[120px] md:pt-[40px]">
			<h1 className="text-[50px] leading-[50px] sm:text-[75px] sm:leading-[75px] lg:text-[100px] lg:leading-[100px] text-yorha font-doto tracking-tighter font-[800]">
				<ScrambleText scramble={8} preventLayoutShift>
					{strings.ui.siteTitle}
				</ScrambleText>
			</h1>
			<p className="text-yorha/60 text-sm sm:text-md font-medium">
				<ScrambleText scramble={10} preventLayoutShift>
					{strings.ui.siteDescription}
				</ScrambleText>
			</p>
		</Page>
	);
}

export default Home;
