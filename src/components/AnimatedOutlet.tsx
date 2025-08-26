import { useLocation, useOutlet } from 'react-router';
import { AnimatePresence } from 'motion/react';

function AnimatedOutlet() {
	const location = useLocation();
	const outlet = useOutlet();

	return (
		<AnimatePresence mode="wait" propagate={true}>
			{outlet && (
				<div key={location.pathname} className="w-full h-full">
					{outlet}
				</div>
			)}
		</AnimatePresence>
	);
}

export default AnimatedOutlet;
