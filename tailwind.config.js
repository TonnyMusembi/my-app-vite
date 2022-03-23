module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        // maxWidth: {

        // },
        // container: {
        //     center: true,
        //     // maxWidth: {
        //     //     'md': '700px'
        //     // }

        // },
        extend: {
            columns: {
                "4xs": "14rem",

            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            blue: "#1fb6ff",
            pink: "#ff49db",
            orange: "#ff7849",
            green: "#13ce66",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
        },

    },

    variants: {
        // ...
        //tableLayout: ['responsive'],
        tableLayout: ['responsive', 'hover', 'focus'],
        objectFit: ['responsive', 'hover', 'focus'],

    },
    plugins: [
        tableLayout = true,
        require('autoprefixer'),

    ],

};