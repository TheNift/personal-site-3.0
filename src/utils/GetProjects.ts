import { useLanguage } from '@contexts/LanguageContext';

function useGetProjects() {
	const { strings } = useLanguage();
	return Object.entries(strings.projects).map(([key, value]) => {
		return {
			...value,
			key,
		};
	});
}

export default useGetProjects;