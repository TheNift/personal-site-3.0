import LoadingHandler from '@components/LoadingHandler';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));
const PortfolioHome = lazy(() => import('@pages/PortfolioHome'));
const Project = lazy(() => import('@components/Project'));
const Experience = lazy(() => import('@/pages/Experience'));
const Contact = lazy(() => import('@pages/Contact'));
const NotFound = lazy(() => import('@pages/404'));

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
			{ path: 'contact', Component: Contact }, // Address: /contact
			{ path: '*', Component: NotFound }, // Catch-all 404 route
		],
	},
]);

export default router;
