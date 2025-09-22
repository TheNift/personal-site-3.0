import { Link, useParams } from 'react-router';
import { useLanguage } from '@contexts/LanguageContext';
import NotFound from '@pages/404';
import Page from '@components/Page';

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
		<Page className="relative flex flex-col items-center justify-center p-4">
			<ReturnButton />
			<h1>{project.title}</h1>
		</Page>
	);
}

function ReturnButton() {
	return (
		<Link to="/portfolio" className="absolute top-4 left-4 btn">
			{strings.ui.projectReturnText}
		</Link>
	);
}

export default Project;
