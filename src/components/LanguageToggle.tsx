import React from 'react';
import { useLanguage } from '@contexts/LanguageContext';
import Button from './Button';
import ScrambleText from './ScrambleText';

const LanguageToggle: React.FC = () => {
	const { language, setLanguage, strings } = useLanguage();

	const toggleLanguage = () => {
		setLanguage(language === 'eng' ? 'viet' : 'eng');
	};

	return (
		<Button
			onClick={toggleLanguage}
			ariaLabel={`Switch to ${language === 'eng' ? 'Vietnamese' : 'English'}`}
			title={`Current: ${language === 'eng' ? 'English' : 'Vietnamese'}`}
			className="transition-all duration-300 ease-in-out flex items-center justify-center"
			style={{
				width: language === 'eng' ? '130px' : '110px',
			}}
		>
			<ScrambleText
				speed={0.5}
				step={10}
				scramble={3}
				className="text-nowrap w-full text-center"
			>
				{language === 'eng'
					? strings.ui.languageToggle
					: strings.ui.languageToggle}
			</ScrambleText>
		</Button>
	);
};

export default LanguageToggle;
