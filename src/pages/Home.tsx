import Page from '@components/Page';
import ScrambleText from '@components/ScrambleText';
import { useLanguage } from '@contexts/LanguageContext';

function Home() {
	const { strings } = useLanguage();

	return (
		<Page className="flex flex-col items-center justify-start p-4 w-full h-full">
			<h1 className="text-[100px] font-bold text-yorha">
				<ScrambleText>{strings.ui.siteTitle}</ScrambleText>
			</h1>
			<p className="text-yorha/60 text-md font-medium">
				<ScrambleText>{strings.ui.siteDescription}</ScrambleText>
			</p>
		</Page>
	);
}

export default Home;
