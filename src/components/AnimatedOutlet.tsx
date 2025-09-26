import { useLocation, useOutlet } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { Suspense } from 'react';

function AnimatedOutlet() {
	const location = useLocation();
	const outlet = useOutlet();

	return (
		<AnimatePresence mode="wait" propagate={true}>
			{outlet && (
				<div key={location.pathname} className="w-full h-full">
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
