import strings from "@/data/strings";

function GetProjects() {
	return Object.entries(strings.projects).map(([key, value]) => {
		return {
			...value,
			key,
		};
	});
}

export default GetProjects;