module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				brightGreen: 'hsl(131, 27%, 45%)',
				brightGreenLight: 'hsl(131, 35%, 57%)',
				brightGreenSupLight: 'hsl(131, 100%, 79%)',
				darkBlue: 'hsl(228, 39%, 23%)',
				darkGrayishBlue: 'hsl(227, 12%, 61%)',
				veryDarkBlue: 'hsl(233, 12%, 13%)',
				veryPaleRed: 'hsl(13, 100%, 96%)',
				veryLightGray: 'hsl(0, 0%, 98%)',
			},
		},
	},
	plugins: [],
};
