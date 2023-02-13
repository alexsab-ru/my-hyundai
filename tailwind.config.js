const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',

	purge: ['index.html', './inc/**/*.php'],

	darkMode: false, // or 'media' or 'class'

	theme: { 
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1200px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			activeRed: '#E63312',
			mainBlue: '#002C5F',
			btnHover: '#103A71',
			sand: '#E4DCD3',
			secondBlue: '#00AAD2',
			transparent: 'transparent',
			current: 'currentColor',
			blue: colors.blue,
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
		},
		extend: {
			fontFamily: {
				sans: ['Hyundai', ...defaultTheme.fontFamily.sans],
			},
		},
	},

	variants: {
		extend: {},
	},
	
	plugins: [],
}
