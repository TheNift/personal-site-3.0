import React from 'react';
import Button from './Button';
import ScrambleText from './ScrambleText';
import { useUI } from '@/contexts/UIContext';

const ContentToggle: React.FC = () => {
	const { toggleContentHidden, isContentHidden } = useUI();
	return (
		<Button
			onClick={toggleContentHidden}
			title={`Toggle Content`}
			className="flex items-center justify-center"
		>
			<ScrambleText
				speed={0.5}
				step={10}
				scramble={3}
				className="text-nowrap w-full text-center"
			>
				{isContentHidden ? 'Show Content' : 'Hide Content'}
			</ScrambleText>
		</Button>
	);
};

export default ContentToggle;
