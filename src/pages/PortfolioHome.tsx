import Page from '@components/Page';
import GetProjects from '@utils/GetProjects';
import type { Project } from '@/types';
import { Link } from 'react-router';

function PortfolioHome() {
	return (
		<Page className="flex flex-col items-center justify-center p-4">
			<h1 className="text-3xl font-bold underline mb-4">Portfolio</h1>
			<ProjectList />
		</Page>
	);
}

function ProjectList() {
	const projects = GetProjects();

	return (
		<div className="flex flex-col gap-4">
			{projects.map((project: Project) => (
				<ProjectCard
					key={project.key || project.slug}
					project={project}
				/>
			))}
		</div>
	);
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<Link to={`/portfolio/${project.slug}`} className="btn">
			{project.title}
		</Link>
	);
}

export default PortfolioHome;
