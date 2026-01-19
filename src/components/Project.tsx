import { Link, useParams } from 'react-router';
import { useLanguage } from '@contexts/LanguageContext';
import NotFound from '@pages/404';
import Page from '@components/Page';
import ScrambleText from './ScrambleText';

function Project() {
	const { pid } = useParams();
	const { strings } = useLanguage();

	const projectData = Object.entries(strings.projects).find(
		([, project]) => project.slug === pid
	);

	if (!projectData) {
		return <NotFound />;
	}

	const [_, project] = projectData;

	return (
		<Page className="relative flex flex-col items-center justify-center p-4 pointer-events-auto">
			<div className="h-full z-5 flex flex-col items-center justify-start text-center aspect-[8.5/11] max-w-[96vw] p-4 pt-[100px] bg-yorha relative drop-shadow-lg overflow-y-scroll hidden-scrollbar shadow-[0_0_20px_rgba(0,0,0,0.9)]">
				<ReturnButton />
				<img
					className="mb-4 w-[60%] aspect-[3/2] object-contain"
					src={`/images/projects/${project.image}`}
					alt={project.title}
				/>
				<h1 className="text-3xl font-bold">
					<ScrambleText scramble={10} preventLayoutShift>
						{project.title}
					</ScrambleText>
				</h1>
				<p className="mt-2">
					<ScrambleText
						scramble={2}
						speed={10}
						step={10}
						overdrive={true}
					>
						{project.description}
					</ScrambleText>
				</p>
				<p className="mt-5">
					<ScrambleText
						scramble={2}
						speed={1}
						step={10}
						overdrive={true}
					>
						{project.body}
					</ScrambleText>
				</p>
			</div>
		</Page>
	);
}

function ReturnButton() {
	const { strings } = useLanguage();
	return (
		<Link
			to="/portfolio"
			className="absolute top-4 right-4 btn border-yorha-dark border-l-yorha-dark/60 border-t-yorha-dark/60 border-b-3 border-r-4 border-1 hover:border-r-1 hover:border-b-1"
		>
			{strings.ui.projectReturnText}
		</Link>
	);
}

export default Project;
