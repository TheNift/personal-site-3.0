import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@contexts/LanguageContext';
import ScrambleText from './ScrambleText';

const LanguageToggle: React.FC = () => {
	const { language, setLanguage, strings } = useLanguage();

	const toggleLanguage = () => {
		setLanguage(language === 'eng' ? 'viet' : 'eng');
	};

	return (
		<motion.button
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, delay: 0.5 }}
			onClick={toggleLanguage}
			className="btn"
			aria-label={`Switch to ${language === 'eng' ? 'Vietnamese' : 'English'}`}
			title={`Current: ${language === 'eng' ? 'English' : 'Vietnamese'}`}
		>
			<ScrambleText speed={0.5} step={10} scramble={3}>
				{language === 'eng'
					? strings.ui.languageToggle
					: strings.ui.languageToggle}
			</ScrambleText>
		</motion.button>
	);
};

export default LanguageToggle;
