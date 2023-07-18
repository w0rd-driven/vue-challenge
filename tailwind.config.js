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
        'gpa-above-more': 'var(--color-gpa-above-more)',
        'gpa-above-less': 'var(--color-gpa-above-less)',
        'gpa-equal': 'var(--color-gpa-equal)',
        'gpa-below-less': 'var(--color-gpa-below-less)',
        'gpa-below-more': 'var(--color-gpa-below-more)',
        'table-header': 'var(--color-table-header)',
        'table-even': 'var(--color-table-even)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    }
  },
  plugins: [],
}
