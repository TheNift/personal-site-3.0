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
		items: {
			'Basic Info': {
				'Name': 'Jack Kill',
				'Pronouns': 'He/Him',
				'Age': '2001-03-20',
				'Years of Experience': '2022-07-01',
				'Location': 'Overland Park, KS',
				'Education': 'B.S. in Computer Science',
				'University': 'University of Kansas',
			},
			'Hobbies': [
				'Video Games',
				'Anime & Manga',
				'Cars & Motorcycles',
				'Model Kits',
				'Keyboards',
				'Sewing',
				'Traveling'
			],
			'Currently Learning': [
				'Go',
				'Rust',
				'Unreal Engine',
			],
			'Design Philosophy': [
				'Performance, Efficiency, & Low Overhead',
				'Simplicity',
				'Modularity & Maintainability',
			],
		},
	},
	experience: {
		title: 'Experience',
		items: [
			{
				company: 'Propaganda3',
				role: 'Software Engineer',
				date: 'July 2024 - Present',
				location: 'Overland Park, KS',
				lines: [
					'Developed and launched high-performance web and mobile applications using React and React-Native via Vite, Next.js, or Expo, delivering to hundreds of thousands of users across various industries.',
					'Executed full-cycle development of multiple project in a small agile team, from planning to deployment.',
					'Created and optimized e-commerce sites and applications using Shopify API + Liquid, contributing to websites generating over $100k in monthly sales.',
					'Engineered scalable backends using MongoDB, PHP, and NodeJS, supporting applications with thousands of users.'
				],
			},
			{
				company: 'New York Presbyterian Hospital',
				role: 'Technology Intern',
				date: 'July 2023 - Aug 2023',
				location: 'New York, NY',
				lines: [
					'Assisted a team of IT Analysts in providing support to hospital staff and the installation & configuration of new hospital systems.',
					'Demonstrated strong problem-solving abilities in resolving complex IT issues involving both software and hardware.',
					'Attended and contributed to staff meetings related to systems planning, workload optimization, and machine learning integration.',
					'Learned about large-scale technology deployment, network deployment & integration, and systems management.'
				],
			},
			{
				company: 'Propaganda3',
				role: 'Software Engineer Intern',
				date: 'July 2022 - January 2024',
				location: 'Overland Park, KS',
				lines: [
					'Collaborated with a team of developers to create client apps & websites, as well as automated maintenance scripts & test cases.',
					'Gained hands-on experience with SaaS and Agile Production methodologies in a dynamic team-based active learning environment.',
					'Gained a greater understanding of project management by observing projects that reach tens of thousands of end users from conceptualization to first release, while considering various factors such as performance, efficiency, and ADA compliance.',
					'Tools used include JavaScript, TypeScript, React-Native, Expo, Python, Selenium, PHP, AWS, and Propaganda3’s WPO codebase.'
				],
			},
			{
				company: 'KU SELF Fellowship',
				role: 'Fellow',
				date: 'Aug 2019 - May 2024',
				location: 'Lawrence, KS',
				lines: [
					'Honed engineering, leadership, and business skills alongside other prestigious KU engineering students.',
					'Took on responsibilities within the fellowship, including organizing events, managing projects, and mentoring younger cohorts.',
					'Worked with small businesses and nonprofit organizations on long-term projects and initiatives.'
				],
			},
		]
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
		title: 'About',
		items: {
			'Basic Info': {
				'Name': 'Jack Kill',
				'Pronouns': 'He/Him',
				'Age': '2001-03-20',
				'Years of Experience': '2022-07-01',
				'Location': 'Overland Park, KS',
				'Education': 'B.S. in Computer Science',
				'University': 'University of Kansas',
			},
			'Hobbies': [
				'Video Games',
				'Anime & Manga',
				'Cars & Motorcycles',
				'Model Kits',
				'Keyboards',
				'Sewing',
				'Traveling'
			],
			'Currently Learning': [
				'Go',
				'Rust',
				'Unreal Engine',
			],
			'Design Philosophy': [
				'Performance, Efficiency, & Low Overhead',
				'Simplicity',
				'Modularity & Maintainability',
			],
		},
	},
	experience: {
		title: 'Kinh nghiệm',
		items: [
			{
				company: 'Propaganda3',
				role: 'Kỹ sư phần mềm',
				date: 'Tháng 7, 2024 - Hiện tại',
				location: 'Overland Park, KS',
				lines: [
					'Phát triển và triển khai các ứng dụng web và di động hiệu suất cao sử dụng React và React-Native thông qua Vite, Next.js, hoặc Expo, phục vụ hàng trăm nghìn người dùng trên nhiều ngành khác nhau.',
					'Thực hiện phát triển chu kỳ đầy đủ của nhiều dự án trong một nhóm agile nhỏ, từ lập kế hoạch đến triển khai.',
					'Tạo và tối ưu hóa các trang web và ứng dụng thương mại điện tử sử dụng Shopify API + Liquid, đóng góp vào các trang web tạo ra hơn $100k doanh thu hàng tháng.',
					'Thiết kế backend có thể mở rộng sử dụng MongoDB, PHP, và NodeJS, hỗ trợ các ứng dụng có hàng nghìn người dùng.'
				],
			},
			{
				company: 'Bệnh viện New York Presbyterian',
				role: 'Thực tập sinh Công nghệ',
				date: 'Tháng 7, 2023 - Tháng 8, 2023',
				location: 'New York, NY',
				lines: [
					'Hỗ trợ một nhóm các Chuyên viên phân tích IT trong việc cung cấp hỗ trợ cho nhân viên bệnh viện và cài đặt & cấu hình các hệ thống bệnh viện mới.',
					'Thể hiện khả năng giải quyết vấn đề mạnh mẽ trong việc giải quyết các vấn đề IT phức tạp liên quan đến cả phần mềm và phần cứng.',
					'Tham gia và đóng góp vào các cuộc họp nhân viên liên quan đến lập kế hoạch hệ thống, tối ưu hóa khối lượng công việc, và tích hợp machine learning.',
					'Học hỏi về triển khai công nghệ quy mô lớn, triển khai & tích hợp mạng, và quản lý hệ thống.'
				],
			},
			{
				company: 'Propaganda3',
				role: 'Thực tập sinh Kỹ sư phần mềm',
				date: 'Tháng 7, 2022 - Tháng 1, 2024',
				location: 'Overland Park, KS',
				lines: [
					'Hợp tác với một nhóm các nhà phát triển để tạo ra các ứng dụng & trang web khách hàng, cũng như các script bảo trì tự động & test case.',
					'Có được kinh nghiệm thực tế với các phương pháp SaaS và Agile Production trong một môi trường học tập chủ động dựa trên nhóm năng động.',
					'Có được hiểu biết sâu hơn về quản lý dự án bằng cách quan sát các dự án tiếp cận hàng chục nghìn người dùng cuối từ khái niệm hóa đến phát hành đầu tiên, trong khi xem xét các yếu tố khác nhau như hiệu suất, hiệu quả, và tuân thủ ADA.',
					'Các công cụ được sử dụng bao gồm JavaScript, TypeScript, React-Native, Expo, Python, Selenium, PHP, AWS, và codebase WPO của Propaganda3.'
				],
			},
			{
				company: 'KU SELF Fellowship',
				role: 'Fellow',
				date: 'Tháng 8, 2019 - Tháng 5, 2024',
				location: 'Lawrence, KS',
				lines: [
					'Rèn luyện các kỹ năng kỹ thuật, lãnh đạo, và kinh doanh cùng với các sinh viên kỹ thuật KU uy tín khác.',
					'Đảm nhận trách nhiệm trong fellowship, bao gồm tổ chức sự kiện, quản lý dự án, và cố vấn cho các khóa trẻ hơn.',
					'Làm việc với các doanh nghiệp nhỏ và tổ chức phi lợi nhuận trong các dự án và sáng kiến dài hạn.'
				],
			},
		]
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