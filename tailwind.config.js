module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
    './src/**/*.css',
  ],
  theme: {
    extend: {
        fontFamily:
        {
            'overpass':['Overpass'],
            'ubuntu':['Ubuntu']
        },
        colors:
        {
            'light-red': 'hsl(356, 100%, 66%)',
            'v-light-red': 'hsl(355, 100%, 74%)',
            'v-dark-blue': 'hsl(208, 49%, 24%)',
            'grayish-blue': 'hsl(240, 2%, 79%)',
            'v-dark-grayish-blue': 'hsl(207, 13%, 34%)',
            'dark-gray':'hsl(240,1%,62%)',
            'v-dark-black-blue': 'hsl(240, 10%, 16%)',
            'v-dark-gray-blue': 'hsl(237, 17%, 21%)',
            'v-dark-desaturated-blue': 'hsl(237, 23%, 32%)'
        },
        fontSize:
        {
            'lg':'1.275rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.6rem',
            '5xl': '3rem',
            '6xl': '4.1rem',
        },
        backgroundImage: {
            'hero-pattern-desktop': "url('../images/bg-pattern-intro-desktop.svg'),linear-gradient(to right,rgb(255 139 109), rgb(255 73 86))",
            'illustration-editor-desktop':"url('../images/illustration-editor-desktop.svg')",
            'pattern-circles':"url('../images/bg-pattern-circles.svg')",
            'illustration-laptop-desktop':"url('../images/illustration-laptop-desktop.svg')",
        },
        backgroundPosition: {
            'pos-hero-desktop': '25% 52%',
            'pos-hero-mobile':'32% 21%',
            'pos-editor-desktop':'800px',
            'pos-circles-desktop':'-272px',
            'pos-circles-mobile':'56% 191%',
            'pos-laptop-desktop':'-50% 86%'
        }
    }
  },
  plugins: [],
}
