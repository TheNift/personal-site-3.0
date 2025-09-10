import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BackgroundProvider } from '@contexts/BackgroundContext';
import { RouterProvider } from 'react-router/dom';
import router from '@router/routes';
import '@assets/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BackgroundProvider>
			<RouterProvider router={router} />
		</BackgroundProvider>
	</StrictMode>
);
