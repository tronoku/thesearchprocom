/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#58ade1',
          50: '#eef7fc',
          100: '#dceff9',
          200: '#b9dff3',
          300: '#96cfed',
          400: '#74bfe7',
          500: '#58ade1',
          600: '#468ab4',
          700: '#346887',
          800: '#23455a',
          900: '#11232d'
        },
        'secondary': {
          DEFAULT: '#1b5083',
          50: '#f2f6fa',
          100: '#e6edf5',
          200: '#ccdcea',
          300: '#b3cae0',
          400: '#99b8d5',
          500: '#1b5083',
          600: '#164069',
          700: '#10304f',
          800: '#0b2034',
          900: '#05101a'
        },
        'link': {
          DEFAULT: '#1b5083',
          hover: '#164069',
        }
      }
    },
  },
  plugins: [],
} 