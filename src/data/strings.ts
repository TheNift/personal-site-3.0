const strings = {
    ui: {
		nav: [
            {
                text: 'Home',
                to: '/',
            },
            {
                text: 'About',
                to: '/about',
            },
			{
				text: 'Experience',
				to: '/experience',
			},
            {
                text: 'Portfolio',
                to: '/portfolio',
            },
			{
				text: 'Contact',
				to: '/contact',
			},
        ],
		loading: {
			title: 'Welcome!',
			messages: [
				'Unlocking front door...',
				'Entering Jack\'s room...',
				'Finishing up this league game...',
				'Grabbing boba...',
				'Thinking really hard...',
				'Pushing to prod...',
				'Oop sorry got distracted...',
				'Locking in...',
				'Finishing champ select...',
				'Pressing a button...',
				'Opening the oven...'
			],
		},
        projectReturnText: 'Portfolio',
		siteTitle: 'Jack Kill',
		siteDescription: 'Software Engineer @ Propaganda3',
	},
	colors: {
		white: '#ffffff',
		black: '#000000',
		darkBlue: '#1a1a4d',
		lightBlue: '#cce6ff',
		yorha: '#d1cdb7',
		yorhaDark: '#14130d',
		siteBg: '#11100b',
	},
	home: {
		title: 'Home',
	},
	about: {
		title: 'About',
	},
	portfolio: {
		title: 'Portfolio',
	},
	projects: {
		campNelson: {
			title: 'Camp Nelson',
			slug: 'camp-nelson',
		},
		p3Valentine: {
			title: 'P3 Valentine',
			slug: 'p3-valentine',
		},
	},
};

export default strings;