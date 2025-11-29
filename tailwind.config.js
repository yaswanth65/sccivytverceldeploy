/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Legacy sizes (deprecated - use semantic classes instead)
        'h1': '72px',
        'h2': '48px',
        'h3': '36px',
        'p1': '20px',
        'p2': '18px',
        'p3': '12px',
      },
    },
  },
  plugins: [],
}
