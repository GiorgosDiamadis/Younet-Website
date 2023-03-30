/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function({ addUtilities }) {

    addUtilities({
        '.rotate-y-minus35': {
            transform: 'perspective(265px) rotateY(2deg)'

        }
    })
})

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            transitionProperty: {
                'top': 'top'
            },
            borderWidth: {
                '1': '1px'
            },
            colors: {
                dark_blue: '#001D48',
                dark_blue_trans: 'rgba(0,29,72,0.69)',
                yn_red: {
                    100: '#FF0115',
                    200: '#ff4655'
                },
                yn_blue: {
                    100: '#0050A2',
                    'transparent': 'rgba(0,80,162,0.8)'
                },


                highlighted: '#04e4ff'
            },
            screens: {
                '1350px': '1350px',
                '1150px': '1150px',
                '800px': '800px'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [rotateY]
}