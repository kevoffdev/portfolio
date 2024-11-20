import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(1 0 1 / 1)',
        secondary: 'rgb(105, 152, 212)',
        foreground: 'rgb(18,18,18)',
        primary: 'rgb(33,34,34)',
      },
    },
  },
  plugins: [],
} satisfies Config;
