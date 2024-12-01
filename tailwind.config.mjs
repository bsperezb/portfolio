import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#e4d9ff', 
        secondary: '#1e2749', 
        tertiary: '#273469', 
        white: '#fafaff', 
        dark: '#30343f', 
			},
			fontFamily: {
        sans: ['Onest Variable', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	 ],
}
