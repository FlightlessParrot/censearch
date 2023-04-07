const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'gra': '#0A2647',
                'sel': '#00C6BD',
                'dark-sel': '#1A857F',
                'dark-sea':'#334B49',
                'c-gray': 'E1E1E1'
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
