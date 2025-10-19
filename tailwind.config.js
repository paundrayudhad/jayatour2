import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        './vendor/filament/**/*.blade.php',
        './app/Filament/**/*.php',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1.25rem',
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
            },
            colors: {
                primary: {
                    DEFAULT: '#1f6feb',
                    50: '#eff4ff',
                    100: '#dbe7ff',
                    200: '#b7cfff',
                    300: '#8ab0ff',
                    400: '#5b8aff',
                    500: '#1f6feb',
                    600: '#1a5dcc',
                    700: '#174aa3',
                    800: '#143a7d',
                    900: '#122f63',
                },
            },
        },
    },
    plugins: [forms, typography],
};
