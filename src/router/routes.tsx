import { createBrowserRouter } from 'react-router';
import GlobalUI from '@components/GlobalUI';
import Home from '@pages/Home';
import About from '@pages/About';
import PortfolioHome from '@pages/PortfolioHome';
import Project from '@components/Project';
import NotFound from '@pages/404';

// Documentation I'm using: https://reactrouter.com/start/data/routing

const router = createBrowserRouter([
	{
		path: '/',
		Component: GlobalUI,
		children: [
			{ index: true, Component: Home }, // Address: /
			{ path: 'about', Component: About }, // Address: /about
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
