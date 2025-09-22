const english = {
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
		languageToggle: 'Tiếng Việt',
	},
	colors: {
		white: '#ffffff',
		black: '#000000',
		darkBlue: '#1a1a4d',
		lightBlue: '#cce6ff',
		yorha: '#d1cdb7',
		yorhaDark: '#14130d',
		siteBg: '#11100b',
		complimentary: '#4e471e',
		mikuLight: '#86cecb',
		mikuDark: '#137a7f',
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

const vietnamese = {
    ui: {
		nav: [
            {
                text: 'Trang chủ',
                to: '/',
            },
            {
                text: 'Giới thiệu',
                to: '/about',
            },
			{
				text: 'Kinh nghiệm',
				to: '/experience',
			},
            {
                text: 'Danh mục',
                to: '/portfolio',
            },
			{
				text: 'Liên hệ',
				to: '/contact',
			},
        ],
		loading: {
			title: 'Chào mừng!',
			messages: [
				'Đang mở khóa cửa trước...',
				'Đang vào phòng của Jack...',
				'Đang hoàn thành game này...',
				'Đang lấy trà sữa...',
				'Đang suy nghĩ rất kỹ...',
				'Đang đẩy code lên prod...',
				'Ối xin lỗi bị phân tâm...',
				'Đang tập trung...',
				'Đang hoàn thành chọn tướng...',
				'Đang nhấn một nút...',
				'Đang mở lò nướng...'
			],
		},
        projectReturnText: 'Danh mục',
		siteTitle: 'Jack Kill',
		siteDescription: 'Kỹ sư phần mềm @ Propaganda3',
		languageToggle: 'English',
	},
	colors: {
		white: '#ffffff',
		black: '#000000',
		darkBlue: '#1a1a4d',
		lightBlue: '#cce6ff',
		yorha: '#d1cdb7',
		yorhaDark: '#14130d',
		siteBg: '#11100b',
		complimentary: '#4e471e',
		mikuLight: '#86cecb',
		mikuDark: '#137a7f',
	},
	home: {
		title: 'Trang chủ',
	},
	about: {
		title: 'Giới thiệu',
	},
	portfolio: {
		title: 'Danh mục',
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
}

export { english, vietnamese };
export default english;