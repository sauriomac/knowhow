import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-linear': 'linear-gradient(180deg, #201f1f, #010620, #21317b, #7d3160, #d10404, #ef0000)',

      },
      colors: {
        brightRed: '#ef0000', // Tu color personalizado
      },
    },
  },
  plugins: [],
}
export default config
