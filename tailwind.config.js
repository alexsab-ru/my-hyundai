const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',

	purge: ['index.html'],

	darkMode: false, // or 'media' or 'class'

	theme: { 
		screens: {
			'sm': '586px',
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
