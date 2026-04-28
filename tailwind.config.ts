import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '768px',
      sm: '992px',
      md: '1100px',
      lg: '1300px',
      xl: '1600px',
      hd: '1800px',
    },
    extend: {
      colors: {
        ink:    '#111F2A',
        paper:  '#FFFFFF',
        bg:     '#F8F5F0',
        accent: '#E85D26',
        dark:   '#111F2A',
        light:  '#FFFFFF',
        'ink-60':   'rgba(17,31,42,0.6)',
        'ink-20':   'rgba(17,31,42,0.15)',
        'ink-10':   'rgba(17,31,42,0.08)',
        'accent-10':'rgba(232,93,38,0.08)',
        'text-hover': '#333333',
      },
      fontFamily: {
        sans:          ['"Gotham Book"',       '"Helvetica Neue"', 'sans-serif'],
        medium:        ['"Gotham Medium"',     '"Helvetica Neue"', 'sans-serif'],
        bold:          ['"Gotham Bold"',       '"Helvetica Neue"', 'sans-serif'],
        serif:         ['"Cormorant Garamond"','Georgia', 'serif'],
        // legacy aliases — keep existing components working
        'sans-medium': ['"Gotham Medium"',     '"Helvetica Neue"', 'sans-serif'],
        'sans-bold':   ['"Gotham Bold"',       '"Helvetica Neue"', 'sans-serif'],
        gotham:        ['"Gotham Book"',        'sans-serif'],
        'gotham-bold': ['"Gotham Bold"',        'sans-serif'],
        'gotham-medium': ['"Gotham Medium"',    'sans-serif'],
        hepta:         ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display':  ['clamp(5rem, 12vw, 14rem)',     { lineHeight: '0.9',  letterSpacing: '-0.04em' }],
        'hero':     ['clamp(3.5rem, 8vw, 9rem)',     { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'headline': ['clamp(2rem, 4vw, 4rem)',       { lineHeight: '1.1',  letterSpacing: '-0.03em' }],
        'subhead':  ['clamp(1.125rem, 2vw, 1.5rem)',{ lineHeight: '1.4'  }],
        'body':     ['1.125rem',                     { lineHeight: '1.7'  }],
        'caption':  ['0.8125rem',                    { lineHeight: '1',   letterSpacing: '0.12em'  }],
        'label':    ['0.75rem',                      { lineHeight: '1',   letterSpacing: '0.12em'  }],
        'heading-lg': ['54px', { lineHeight: '1.1' }],
        'heading-md': ['36px', { lineHeight: '1.2' }],
        'heading-sm': ['24px', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        tight:  '-0.04em',
        wide:   '0.12em',
        wider:  '0.2em',
      },
      maxWidth: {
        content:       '1280px',
        wide:          '1440px',
        container:     '1280px',
        'container-xl':'1440px',
        reading:       '68ch',
      },
      borderRadius: {
        DEFAULT: '2px',
        sm:      '2px',
        md:      '4px',
        full:    '9999px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo':  'cubic-bezier(0.7, 0, 0.84, 0)',
        'spring':   'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite linear',
      },
    },
  },
  plugins: [],
}

export default config
