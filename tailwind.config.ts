import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7CBECE',
          light: '#A1D1D8',
          dark: '#5A9BA5',
        },
        fontFamily: {
          outfit: ['var(--font-outfit)', 'sans-serif'],
          montserrat: ['var(--font-montserrat)', 'sans-serif'],
          poppins: ['var(--font-poppins)', 'sans-serif'],
        },
      },
      backgroundImage: {
        'grid-black': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 15 15 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.perspective-1000': {
          perspective: '1000px'
        },
        '.transform-gpu': {
          transform: 'translateZ(0)',
        },
      }
      addUtilities(newUtilities);
    }
  ],
}
export default config 