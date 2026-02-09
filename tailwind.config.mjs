/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'teal-primary': '#0D9488',
        'teal-dark': '#0B7A70',
        'teal-light': '#14B8A6',
        'coral': '#F97316',
        'coral-dark': '#EA580C',
        'mint': '#F0FDFA',
        'warm': '#FFF7ED',
        'slate-dark': '#0F172A',
        'slate-mid': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
