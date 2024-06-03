/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			black: 'rgba(0, 0, 0, 1)',
			blue: 'rgba(72, 233, 255, 1)',
			green: 'rgba(81, 255, 171, 1)',
			orange: 'rgba(255, 143, 39, 1)',
			red: 'rgba(255, 84, 146, 1)',
			white: 'rgba(255, 255, 255, 1)',
			yellow: 'rgba(255, 248, 72, 1)',
		},
		fontFamily: {
			primary: ['Gordita'],
		},
		extend: {
			keyframes: {
				fill: {
					'0%': {
						width: '0%',
					},
					'100%': {
						width: 'full',
					},
				},
			},
		},
	},
	plugins: [],
};
