import { useEffect } from 'react';
import Page from '@components/Page';
import ScrambleText from '@components/ScrambleText';
import { useLanguage } from '@contexts/LanguageContext';

function Home() {
	const { strings } = useLanguage();

	useEffect(() => {
		const schemaData = {
			'@context': 'https://schema.org/',
			'@type': 'Person',
			name: 'Jack Kill',
			pronouns: 'He/Him',
			jobTitle: 'Software Engineer',
			height: [
				{
					'@type': 'QuantitativeValue',
					value: '192',
					unitCode: 'cm',
					unitText: 'centimeters',
				},
				{
					'@type': 'QuantitativeValue',
					value: '75',
					unitCode: 'in',
					unitText: 'inches',
				},
				{
					'@type': 'QuantitativeValue',
					value: '6.25',
					unitCode: 'ft',
					unitText: 'feet',
				},
			],
			weight: [
				{
					'@type': 'QuantitativeValue',
					value: '97.5',
					unitCode: 'kg',
					unitText: 'kilograms',
				},
				{
					'@type': 'QuantitativeValue',
					value: '215',
					unitCode: 'lb',
					unitText: 'pounds',
				},
			],
			hasOccupation: [
				{
					'@type': 'Role',
					hasOccupation: {
						'@type': 'Occupation',
						name: 'Software Engineer',
						occupationalCategory: '15-1252.00',
					},
					startDate: '2024-07-01',
					endDate: 'present',
				},
				{
					'@type': 'Role',
					hasOccupation: {
						'@type': 'Occupation',
						name: 'Technology Intern',
						occupationalCategory: '15-1299.09',
					},
					startDate: '2023-07-01',
					endDate: '2023-08-31',
				},
				{
					'@type': 'Role',
					hasOccupation: {
						'@type': 'Occupation',
						name: 'Software Engineer Intern',
						occupationalCategory: '15-1252.00',
					},
					startDate: '2022-07-01',
					endDate: '2024-01-31',
				},
				{
					'@type': 'Role',
					hasOccupation: {
						'@type': 'Occupation',
						name: 'SELF Fellow',
						occupationalCategory: '25-1199.00',
					},
					startDate: '2019-08-01',
					endDate: '2024-05-31',
				},
			],
			knowsLanguage: [
				{
					'@type': 'Language',
					name: 'English',
					alternateName: 'Tiếng Anh',
				},
				{
					'@type': 'Language',
					name: 'Vietnamese',
					alternateName: 'Tiếng Việt',
				},
			],
			skills: [
				{ '@type': 'Skill', name: 'JavaScript' },
				{ '@type': 'Skill', name: 'TypeScript' },
				{ '@type': 'Skill', name: 'C++' },
				{ '@type': 'Skill', name: 'C' },
				{ '@type': 'Skill', name: 'Go' },
				{ '@type': 'Skill', name: 'PHP' },
				{ '@type': 'Skill', name: 'Python' },
				{ '@type': 'Skill', name: 'Java' },
				{ '@type': 'Skill', name: 'C#' },
				{ '@type': 'Skill', name: 'React', alternateName: 'Vite, Next.js, NextJS' },
				{ '@type': 'Skill', name: 'React Native', alternateName: 'React-Native, Expo' },
				{ '@type': 'Skill', name: 'Node.js', alternateName: 'NodeJS' },
				{ '@type': 'Skill', name: 'Tailwind CSS', alternateName: 'TailwindCSS' },
				{ '@type': 'Skill', name: 'MongoDB' },
				{ '@type': 'Skill', name: 'MySQL', alternateName: 'SQL' },
				{
					'@type': 'Skill',
					name: 'Full-Stack Development',
					alternateName: 'Fullstack Development',
				},
				{ '@type': 'Skill', name: 'Frontend Development' },
				{ '@type': 'Skill', name: 'Backend Development' },
				{ '@type': 'Skill', name: 'Unity', alternateName: 'Unity Engine' },
				{ '@type': 'Skill', name: 'Unreal Engine' },
				{ '@type': 'Skill', name: 'Godot', alternateName: 'Godot Engine' },
				{ '@type': 'Skill', name: 'AWS', alternateName: 'Amazon Web Services' },
				{ '@type': 'Skill', name: 'Docker' },
				{ '@type': 'Skill', name: 'Git' },
				{ '@type': 'Skill', name: 'GitHub', alternateName: 'GitHub Actions' },
				{ '@type': 'Skill', name: 'Cloudflare', alternateName: 'Cloudflare Workers' },
				{ '@type': 'Skill', name: 'Cloudflare Pages' },
				{ '@type': 'Skill', name: 'WordPress' },
				{ '@type': 'Skill', name: 'Shopify', alternateName: 'Shopify API' },
				{ '@type': 'Skill', name: 'Liquid', alternateName: 'Liquid Template Language' },
				{ '@type': 'Skill', name: 'Selenium', alternateName: 'Selenium WebDriver' },
				{ '@type': 'Skill', name: 'REST API', alternateName: 'RESTful API' },
				{ '@type': 'Skill', name: 'UI/UX Development' },
				{
					'@type': 'Skill',
					name: 'Linux',
					alternateName: 'Arch Linux, Ubuntu, Manjaro',
				},
				{ '@type': 'Skill', name: 'MacOS', alternateName: 'macOS' },
				{
					'@type': 'Skill',
					name: 'Windows',
					alternateName: 'Windows 10, Windows 11',
				},
				{ '@type': 'Skill', name: 'Android', alternateName: 'Android OS' },
				{ '@type': 'Skill', name: 'iOS', alternateName: 'iOS OS' },
				{ '@type': 'Skill', name: 'xCode', alternateName: 'xCode IDE' },
				{ '@type': 'Skill', name: 'VSCode', alternateName: 'Visual Studio Code' },
				{
					'@type': 'Skill',
					name: 'Teamwork',
					alternateName: 'Communication, Leadership, Collaboration',
				},
				{
					'@type': 'Skill',
					name: 'Problem Solving',
					alternateName: 'Problem Solving, Critical Thinking',
				},
				{
					'@type': 'Skill',
					name: 'Adaptability',
					alternateName: 'Adaptability, Flexibility',
				},
				{
					'@type': 'Skill',
					name: 'Time Management',
					alternateName: 'Time Management, Prioritization',
				},
				{
					'@type': 'Skill',
					name: 'Agile Development',
					alternateName: 'Agile Methodologies, Scrum',
				},
			],
			alumniOf: {
				'@type': 'EducationalOrganization',
				name: 'University of Kansas',
				startDate: '2019',
				endDate: '2023',
			},
		};

		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.text = JSON.stringify(schemaData);
		script.id = 'home-page-schema';
		document.head.appendChild(script);

		return () => {
			const existingScript = document.getElementById('home-page-schema');
			if (existingScript) {
				document.head.removeChild(existingScript);
			}
		};
	}, []);

	return (
		<Page className="flex flex-col items-center justify-start p-4 w-full h-full pt-[120px] md:pt-[40px]">
			<h1 className="text-[50px] leading-[50px] sm:text-[75px] sm:leading-[75px] lg:text-[100px] lg:leading-[100px] text-yorha font-doto tracking-tighter font-[800]">
				<ScrambleText scramble={8} preventLayoutShift>
					{strings.ui.siteTitle}
				</ScrambleText>
			</h1>
			<p className="text-yorha/60 text-sm sm:text-md font-medium">
				<ScrambleText scramble={10} preventLayoutShift>
					{strings.ui.siteDescription}
				</ScrambleText>
			</p>
			<h2 className="sr-only">Welcome to my portfolio site!</h2>
			<p className="sr-only">This site is built with React, Tailwind, and ThreeJS with a main focus on a background scene utilizing 3D models and a moving camera based on the frontend UI's current state. If you're using a screen reader, I apologize, this site will have some inaccessable visuals. Check in later for a compatibility mode, as well as a simplicity mode for clients with graphics acceleration disabled!</p>
		</Page>
	);
}

export default Home;
