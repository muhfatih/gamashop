module.exports = {
	// mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			padding: {
				DEFAULT: '5%',
				sm: '32px',
			},
			center: true
		},
		extend: {
			colors: {
				base: '#ffffff',
				primary: {
					DEFAULT: '#3b3b3b',
					red: '#FC3C5B'
				}
			},
			fontFamily: {
				main: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
				slab: 'Patua One, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
			},
			screens: {
				'-2xl': { raw: '(max-width: 1535px)' },
				'-xl': { raw: '(max-width: 1279px)' },
				'-lg': { raw: '(max-width: 1023px)' },
				'-md': { raw: '(max-width: 767px)' },
				'-sm': { raw: '(max-width: 639px)' },
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
