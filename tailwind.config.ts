import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        xsuve: '#95c93d',
      },
      fontFamily: {
        'mabry-pro': 'var(--font-mabry-pro)',
        oswald: 'var(--font-oswald)',
      },
    },
  },
  plugins: [],
};
export default config;
