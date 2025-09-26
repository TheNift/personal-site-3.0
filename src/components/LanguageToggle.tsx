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
			delay={0.5}
		>
			<ScrambleText speed={0.5} step={10} scramble={3}>
				{language === 'eng'
					? strings.ui.languageToggle
					: strings.ui.languageToggle}
			</ScrambleText>
		</Button>
	);
};

export default LanguageToggle;
