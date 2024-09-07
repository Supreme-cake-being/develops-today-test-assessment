/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: '767px' },
        md: { min: '768px', max: '1279px' },
        lg: '1280px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          md: '24px',
          lg: '32px',
        },
      },
      fontSize: {
        sm: ['32px', '40px'],
        md: ['20px', '28px'],
        lg: ['36px', '48px'],
      },
      colors: {
        transparent: 'transparent',
        'light-gray': '#6b7280',
      },
      padding: {
        sm: '8px 16px',
        md: '12px 24px',
        lg: '16px 32px',
      },
    },
  },
  plugins: [],
};
