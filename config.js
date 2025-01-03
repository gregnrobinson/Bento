// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Greg',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'aa600cf38d4ea1abab0f93b0c2ae87b8', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '43.6532',
	defaultLongitude: '79.3832',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
	  {
		id: '1',
		name: 'Github',
		icon: 'github',
		link: 'https://github.com/gregnrobinson',
	  },
	  {
		id: '2',
		name: 'Youtube',
		icon: 'youtube',
		link: 'https://youtube.com/',
	  },
	  {
		id: '3',
		name: 'Mail',
		icon: 'mail',
		link: 'https://outlook.office.com/mail/',
	  },
	  {
		id: '4',
		name: 'Calendar',
		icon: 'calendar',
		link: 'https://outlook.office.com/calendar/view/week',
	  },
	  {
		id: '5',
		name: 'ChatGPT',
		icon: 'code',
		link: 'https://chat.openai.com/',
	  },
	  {
		id: '6',
		name: 'Linkedin',
		icon: 'linkedin',
		link: 'https://www.linkedin.com/in/gregnrobinson/',
	  },
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'code',
			id: '1',
			links: [
				{
					name: 'Slalom One',
					link: 'https://twodegrees1.sharepoint.com/teams/Slalom',
				},
				{
					name: 'me@slalom',
					link: 'https://me.slalom.com',
				},
				{
					name: 'My Requests',
					link: 'https://slalom.service-now.com/help?id=my_requests',
				},
				{
					name: 'My Time',
					link: 'https://mytime.slalom.com',
				},
			],
		},
		{
			icon: 'code',
			id: '2',
			links: [
				{
					name: 'Expenses',
					link: 'https://app.eu1.chromeriver.com/index',
				},
				{
					name: 'Workday',
					link: 'https://www.myworkday.com/slalom/d/home.htmld',
				},
					{
					name: 'Slalom Help',
					link: 'https://slalom.service-now.com/help',
				},
				{
					name: 'Bitbucket',
					link: 'https://bitbucket.org/slalom-consulting',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
