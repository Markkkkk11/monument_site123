/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jun: ['"Jun"', '"Times New Roman"', 'serif'],
      },
      colors: {
        'dark-lava': '#453F3C',
        'american-silver': '#CBCDD1',
      },
      backgroundImage: {
        'marble-dark':
          "linear-gradient(135deg, rgba(22,17,15,0.72), rgba(32,24,20,0.78)), url('/assets/textures/marble.jpg')",
        'marble-light':
          'linear-gradient(120deg, rgba(248,248,248,0.97), rgba(236,236,236,0.97)), radial-gradient(circle at 20% 20%, rgba(140,140,140,0.08) 0, transparent 32%), radial-gradient(circle at 80% 0%, rgba(120,120,120,0.05) 0, transparent 26%), radial-gradient(circle at 5% 80%, rgba(170,170,170,0.05) 0, transparent 24%), radial-gradient(circle at 70% 70%, rgba(150,150,150,0.04) 0, transparent 30%)',
      },
      boxShadow: {
        soft: '0 14px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}

