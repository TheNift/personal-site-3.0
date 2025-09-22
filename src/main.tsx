import { createRoot } from 'react-dom/client';
import { BackgroundProvider } from '@contexts/BackgroundContext';
import { LanguageProvider } from '@contexts/LanguageContext';
import { RouterProvider } from 'react-router/dom';
import router from '@router/routes';
import '@assets/index.css';

createRoot(document.getElementById('root')!).render(
	<LanguageProvider>
		<BackgroundProvider>
			<RouterProvider router={router} />
		</BackgroundProvider>
	</LanguageProvider>
);
