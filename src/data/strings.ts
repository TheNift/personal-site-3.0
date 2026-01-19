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
				'Opening the oven...',
				'Making coffee...'
			],
		},
        projectReturnText: 'Portfolio',
		siteTitle: 'Jack Kill',
		siteDescription: 'Software Engineer | Always Improving',
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
				'Tailoring',
				'Traveling'
			],
			'Currently Learning': [
				'Go',
				'Java',
				'Hytale Modding',
			],
			'Design Philosophy': [
				'Performance, Efficiency, & Low Overhead',
				'Lean Towards Simplicity',
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
					'Tools used include JavaScript, TypeScript, React-Native, Expo, Python, Selenium, PHP, AWS, and proprietary codebases.'
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
		personalSite: {
			title: 'Personal Site',
			slug: 'personal-site',
			description: 'My personal site, built with React, Tailwind, and ThreeJS.',
			image: 'personal-site.webp',
			body: 'My personal site, built with React, Tailwind, and ThreeJS. I built it to showcase my current skills and capabilities, and plan to update it whenever I learn something new!',
		},
		p3Projects: {
			title: 'Projects @ Propaganda3',
			slug: 'p3-projects',
			description: 'Always making cool stuff at P3!',
			image: 'p3-projects.webp',
			body: 'At Propaganda3, I work on a wide spectrum of projects, from apps to websites to visual displays in game engines. Please reach out to talk about details!',
		},
	},
	contact: {
		title: "Contact Me!",
		form: {
			name: "Name",
			email: "Email",
			message: "Message"
		}
	}
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
				'Đang chơi nốt ván game...',
				'Đang đi mua trà sữa...',
				'Đang suy nghĩ rất lung...',
				'Đang deploy lên production...',
				'Úi xin lỗi, bị phân tâm chút...',
				'Đang tập trung cao độ...',
				'Đang chọn tướng xong...',
				'Đang bấm nút...',
				'Đang mở lò nướng...',
                'Đang pha cà phê...'
			],
		},
        projectReturnText: 'Danh mục',
		siteTitle: 'Jack Kill',
		siteDescription: 'Kỹ sư phần mềm | Luôn không ngừng tiến bộ',
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
				'Education': 'Cử nhân Khoa học Máy tính',
				'University': 'University of Kansas',
			},
			'Hobbies': [
				'Trò chơi điện tử',
				'Anime & Manga',
				'Ô tô & Xe máy',
				'Mô hình lắp ráp',
				'Bàn phím cơ',
				'May mặc',
				'Du lịch'
			],
			'Currently Learning': [
				'Go',
				'Java',
				'Modding Hytale',
			],
			'Design Philosophy': [
				'Hiệu năng, Hiệu quả & Tối ưu hóa',
				'Hướng tới sự đơn giản',
				'Tính mô-đun & Khả năng bảo trì',
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
					'Phát triển và ra mắt các ứng dụng web và di động hiệu năng cao sử dụng React và React-Native thông qua Vite, Next.js, hoặc Expo, phục vụ hàng trăm nghìn người dùng trong nhiều lĩnh vực khác nhau.',
					'Thực hiện toàn bộ quy trình phát triển của nhiều dự án trong một nhóm agile nhỏ, từ lập kế hoạch đến triển khai.',
					'Xây dựng và tối ưu hóa các trang web và ứng dụng thương mại điện tử sử dụng Shopify API + Liquid, đóng góp vào các trang web tạo ra doanh thu hơn 100 nghìn đô la hàng tháng.',
					'Thiết kế các backend có khả năng mở rộng sử dụng MongoDB, PHP và NodeJS, hỗ trợ các ứng dụng với hàng nghìn người dùng.'
				],
			},
			{
				company: 'Bệnh viện New York Presbyterian',
				role: 'Thực tập sinh Công nghệ',
				date: 'Tháng 7, 2023 - Tháng 8, 2023',
				location: 'New York, NY',
				lines: [
					'Hỗ trợ nhóm Chuyên viên phân tích CNTT trong việc cung cấp hỗ trợ cho nhân viên bệnh viện cũng như cài đặt và cấu hình các hệ thống bệnh viện mới.',
					'Thể hiện khả năng giải quyết vấn đề mạnh mẽ khi xử lý các sự cố CNTT phức tạp liên quan đến cả phần mềm và phần cứng.',
					'Tham dự và đóng góp vào các cuộc họp nhân viên liên quan đến lập kế hoạch hệ thống, tối ưu hóa khối lượng công việc và tích hợp học máy.',
					'Tìm hiểu về triển khai công nghệ quy mô lớn, triển khai & tích hợp mạng, và quản lý hệ thống.'
				],
			},
			{
				company: 'Propaganda3',
				role: 'Thực tập sinh Kỹ sư phần mềm',
				date: 'Tháng 7, 2022 - Tháng 1, 2024',
				location: 'Overland Park, KS',
				lines: [
					'Hợp tác với nhóm phát triển để tạo ra các ứng dụng & trang web cho khách hàng, cũng như các kịch bản bảo trì tự động & bộ kiểm thử.',
					'Tích lũy kinh nghiệm thực tế với các phương pháp SaaS và Sản xuất Agile trong môi trường học tập năng động dựa trên làm việc nhóm.',
					'Hiểu sâu hơn về quản lý dự án thông qua việc quan sát các dự án tiếp cận hàng chục nghìn người dùng cuối từ khâu lên ý tưởng đến bản phát hành đầu tiên, đồng thời cân nhắc các yếu tố như hiệu suất, hiệu quả và tuân thủ ADA.',
					'Các công cụ sử dụng bao gồm JavaScript, TypeScript, React-Native, Expo, Python, Selenium, PHP, AWS và các codebase độc quyền.'
				],
			},
			{
				company: 'KU SELF Fellowship',
				role: 'Fellow',
				date: 'Tháng 8, 2019 - Tháng 5, 2024',
				location: 'Lawrence, KS',
				lines: [
					'Rèn luyện các kỹ năng kỹ thuật, lãnh đạo và kinh doanh cùng với các sinh viên kỹ thuật ưu tú khác của KU.',
					'Đảm nhận các trách nhiệm trong chương trình học bổng, bao gồm tổ chức sự kiện, quản lý dự án và cố vấn cho các khóa sau.',
					'Làm việc với các doanh nghiệp nhỏ và tổ chức phi lợi nhuận trong các dự án và sáng kiến dài hạn.'
				],
			},
		]
	},
	portfolio: {
		title: 'Danh mục',
	},
	projects: {
		personalSite: {
			title: 'Trang cá nhân',
			slug: 'personal-site',
			description: 'Trang web cá nhân của tôi, được xây dựng bằng React, Tailwind và ThreeJS.',
			image: 'personal-site.webp',
			body: 'Trang web cá nhân của tôi, được xây dựng bằng React, Tailwind và ThreeJS. Tôi xây dựng nó để giới thiệu các kỹ năng và khả năng hiện tại của mình, và dự định sẽ cập nhật nó bất cứ khi nào tôi học được điều gì mới!',
		},
		p3Projects: {
			title: 'Dự án @ Propaganda3',
			slug: 'p3-projects',
			description: 'Luôn tạo ra những sản phẩm thú vị tại P3!',
			image: 'p3-projects.webp',
			body: 'Tại Propaganda3, tôi làm việc trên nhiều dự án khác nhau, từ ứng dụng, trang web đến các hiển thị trực quan trong công cụ trò chơi. Hãy liên hệ để trao đổi chi tiết!',
		},
	},
	contact: {
		title: "Liên hệ với tôi!",
		form: {
			name: "Tên",
			email: "Email",
			message: "Tin nhắn"
		}
	}
}

export { english, vietnamese };
export default english;