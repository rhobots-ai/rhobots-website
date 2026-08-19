/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light enterprise palette. Token names are unchanged from the previous
        // dark theme so existing utility classes keep working — only the values
        // flip. See the redesign brief for contrast rationale.

        // Surfaces (light → progressively tinted greys)
        'surface-container-lowest': '#ffffff',
        'background': '#ffffff',
        'surface': '#ffffff',
        'surface-bright': '#ffffff',
        'surface-dim': '#f7f7f5',
        'surface-container-low': '#fafaf9',
        'surface-container': '#f5f5f3',
        'surface-container-high': '#eeeeeb',
        'surface-container-highest': '#e6e6e2',
        'surface-variant': '#eeeeeb',
        'surface-tint': '#4c5a00',

        // Text
        'on-surface': '#131313', // 16.9:1 on white
        'on-background': '#131313',
        'on-surface-variant': '#57534e', // 7.4:1 — secondary body copy
        'inverse-surface': '#131313',
        'inverse-on-surface': '#ffffff',

        // Lines + tertiary text
        'outline': '#6b6b66', // 5.4:1 — used as text, must stay legible
        'outline-variant': '#e7e5e4', // hairline borders only

        // Accent. #d2f000 is 1.23:1 on white and unusable; #4c5a00 is the same
        // hue at 7.59:1, and reads AA both as text on white and as white on fill.
        'primary': '#131313', // solid near-black button surface
        'on-primary': '#ffffff',
        'primary-fixed': '#4c5a00',
        'primary-fixed-dim': '#3a4500',
        'on-primary-fixed': '#ffffff',
        'on-primary-fixed-variant': '#3a4500',
        'inverse-primary': '#c8e07a',
        'primary-container': '#f2f7d6',
        'on-primary-container': '#3a4500',
        'focus': '#4c5a00',

        // Raw brand lime, permitted only on deliberately dark surfaces
        // (the Pulse agent orb, chart series). Never on white.
        'accent-hi': '#d2f000',

        // Secondary / tertiary
        'secondary': '#44546a',
        'on-secondary': '#ffffff',
        'secondary-container': '#dde5f0',
        'on-secondary-container': '#2a3542',
        'secondary-fixed': '#dde5f0',
        'secondary-fixed-dim': '#c2cfe0',
        'on-secondary-fixed': '#0d1d2a',
        'on-secondary-fixed-variant': '#394857',
        'tertiary': '#16343b',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#d7eef4',
        'on-tertiary-container': '#0b2b31',
        'tertiary-fixed': '#d7eef4',
        'tertiary-fixed-dim': '#acccd4',
        'on-tertiary-fixed': '#001f26',
        'on-tertiary-fixed-variant': '#2e4b52',

        // Error
        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#410002',
      },
      boxShadow: {
        // The dark theme needed no elevation; on white, flat + 0px radius
        // reads as unstyled HTML.
        sm: '0 1px 2px 0 rgb(19 19 19 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(19 19 19 / 0.08), 0 1px 2px -1px rgb(19 19 19 / 0.06)',
        md: '0 4px 10px -2px rgb(19 19 19 / 0.08), 0 2px 4px -2px rgb(19 19 19 / 0.05)',
        lg: '0 12px 24px -6px rgb(19 19 19 / 0.10), 0 4px 8px -4px rgb(19 19 19 / 0.05)',
      },
      fontFamily: {
        headline: ['Public Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
      borderRadius: {
        DEFAULT: '2px',
        lg: '3px',
        xl: '4px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
