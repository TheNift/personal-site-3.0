import { useLocation, useOutlet } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { Suspense } from 'react';
import { useUI } from '@contexts/UIContext';
function AnimatedOutlet() {
	const location = useLocation();
	const outlet = useOutlet();
	const { isContentHidden } = useUI();
	return (
		<AnimatePresence mode="wait" propagate={true}>
			{outlet && (
				<div
					key={location.pathname}
					className={`w-full h-full ${isContentHidden ? 'opacity-0' : 'opacity-100'} transition-all duration-300 ease-in-out`}
				>
					<Suspense
						fallback={
							<div className="w-full h-full flex items-center justify-center">
								Loading...
							</div>
						}
					>
						{outlet}
					</Suspense>
				</div>
			)}
		</AnimatePresence>
	);
}

export default AnimatedOutlet;
