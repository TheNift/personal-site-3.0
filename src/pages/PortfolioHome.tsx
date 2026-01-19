import Page from '@components/Page';
import ScrambleText from '@components/ScrambleText';

// import useGetProjects from '@utils/GetProjects';
// import type { Project } from '@/types';
// import { Link } from 'react-router';

function PortfolioHome() {
	return (
		<Page className="flex flex-col items-center justify-start p-4 pt-[120px] md:pt-[40px]">
			<h1 className="text-[50px] leading-[50px] sm:text-[75px] sm:leading-[75px] lg:text-[100px] lg:leading-[100px] text-yorha font-doto tracking-tighter font-[800] mb-4">
				<ScrambleText scramble={8} preventLayoutShift>
					Portfolio
				</ScrambleText>
			</h1>
			<p className="text-yorha/60 text-sm sm:text-md font-medium">
				<ScrambleText scramble={10} preventLayoutShift>
					Click an object to see project info!
				</ScrambleText>
			</p>
		</Page>
	);
	return null;
}

// function ProjectList() {
// 	const projects = useGetProjects();

// 	return (
// 		<div className="flex flex-col gap-4">
// 			{projects.map((project: Project) => (
// 				<ProjectCard
// 					key={project.key || project.slug}
// 					project={project}
// 				/>
// 			))}
// 		</div>
// 	);
// }

// function ProjectCard({ project }: { project: Project }) {
// 	return (
// 		<Link to={`/portfolio/${project.slug}`} className="btn">
// 			{project.title}
// 		</Link>
// 	);
// }

export default PortfolioHome;
