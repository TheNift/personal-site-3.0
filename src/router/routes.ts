import { createBrowserRouter } from 'react-router';
import LoadingHandler from '@components/LoadingHandler';
import { lazy } from 'react';
import Home from '@pages/Home'; // Intentionally not lazy loading this one! It's the first page, so not lazy loading improved LCP

// const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));
const PortfolioHome = lazy(() => import('@pages/PortfolioHome'));
const Project = lazy(() => import('@components/Project'));
const NotFound = lazy(() => import('@pages/404'));
const Experience = lazy(() => import('@/pages/Experience'));

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
