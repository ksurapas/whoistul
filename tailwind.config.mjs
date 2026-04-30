/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: { DEFAULT: '#FAFAFA', alt: '#F0F0F2' },
        text: { DEFAULT: '#1A1A1A', muted: '#6B7280' },
        accent: { DEFAULT: '#3B5998', hover: '#2D4373' },
        border: '#E5E7EB',
        card: '#FFFFFF',
      },
      fontSize: {
        hero: ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
};
