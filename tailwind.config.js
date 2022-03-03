module.exports = {
    content: ["./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            columns: {
                '4xs': '14rem',
            }
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'blue': '#1fb6ff',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
        },
    },

    plugins: [],
}