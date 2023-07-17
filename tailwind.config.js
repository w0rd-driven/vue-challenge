module.exports = {
  purge: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Roboto', 'Arial', 'system-ui', 'sans‑serif'],
    },
    extend: {
      colors: {
        'rule': 'var(--color-rule)',
        'avatar-1': 'var(--color-avatar-1)',
        'avatar-2': 'var(--color-avatar-2)',
        'avatar-3': 'var(--color-avatar-3)',
        'avatar-4': 'var(--color-avatar-4)',
        'avatar-5': 'var(--color-avatar-5)',
        'avatar-6': 'var(--color-avatar-6)',
        'table-header': 'var(--color-table-header)',
        'table-even': 'var(--color-table-even)',
      },
    },
  },
  variants: {},
  plugins: [],
}
