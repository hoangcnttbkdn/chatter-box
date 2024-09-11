import tailwincssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    plugins: [tailwincssAnimate, require('@tailwindcss/forms')],
    theme: {
        extend: {
            colors: {
                red: '#F15634',
                orange: '#ED7E60',
                'dark-gray': '#171717',
            },
        },
    },
    // Enable backdrop utilities
    backdropFilter: {
        none: 'none',
        blur: 'blur(4px)',
    },
    filter: {
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(12px)',
        'blur-xl': 'blur(16px)',
    },
};
