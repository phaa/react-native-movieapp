const fonts = {
	Blinker: {
		regular: 'BlinkerRegular',
		semibold: 'BlinkerSemiBold',
		bold: 'BlinkerBold'
	}
}

const lightThemeColors = {
	primary: '#BE090D',
	secondary: '#09beba',

	success: '#5EB21E',
	failure: '#A8171C',
	info: '#3D8EF7',
	warning: '#B6BF0B',

	background: '#F0EDED',
	foreground: '#FFF',

	text: {
		primary: '#262626',
		secondary: '#ACACAC'
	},
	disabled: '#DDD'
}

const darkThemeColors = {
	primary: '#3B9AE1',
	secondary: '',

	success: '#19C162',
	failure: '#FF413A',
	info: '#3D8EF7',
	warning: '#F9EF25',

	background: '#141414',
	foreground: '#363636',

	text: {
		primary: '#EEE',
		secondary: '#A7A6A6'
	},
	disabled: '#DDD'
}

export const theme = {
	light: {
		colors: lightThemeColors,
		fonts: fonts
	},
	dark: {
		colors: darkThemeColors,
		fonts: fonts
	}
}