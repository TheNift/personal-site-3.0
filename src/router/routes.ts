import { createBrowserRouter } from 'react-router';
import LoadingHandler from '@components/LoadingHandler';
import Home from '@pages/Home';
import About from '@pages/About';
import PortfolioHome from '@pages/PortfolioHome';
import Project from '@components/Project';
import NotFound from '@pages/404';
import Experience from '@/pages/Experience';

// Documentation I'm using: https://reactrouter.com/start/data/routing

const router = createBrowserRouter([
	{
		path: '/',
		Component: LoadingHandler,
		children: [
			{ index: true, Component: Home }, // Address: /
			{ path: 'about', Component: About }, // Address: /about
			{ path: 'experience', Component: Experience }, // Address: /experience
			{
				path: 'portfolio',
				children: [
					{ index: true, Component: PortfolioHome }, // Address: /portfolio
					{ path: ':pid', Component: Project }, // Address: /portfolio/:pid
				],
			},
			{ path: '*', Component: NotFound }, // Catch-all 404 route
		],
	},
]);

export default router;
