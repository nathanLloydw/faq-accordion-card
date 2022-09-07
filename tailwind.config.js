module.exports = {
  content: [
    './*.html',
    './public/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
    './src/**/*.css',
  ],
  theme: {
    extend: {
        fontFamily:
        {
            'kumbh-sans':['Kumbh Sans']
        },
        colors:
        {
            'v-dark-desaturated-blue':'hsl(238, 29%, 16%)',
            'soft-red':'hsl(14, 88%, 65%)',
            'soft-violet':'hsl(273, 75%, 66%)',
            'soft-blue':'hsl(240, 73%, 65%)',
            'v-dark-grayish-blue':'hsl(237, 12%, 33%)',
            'dark-grayish-blue':'hsl(240, 6%, 50%)',
            'light-grayish-blue':'hsl(240, 5%, 91%)'
        },
        backgroundImage: {
            'card-desktop-pattern':"url('~/images/bg-pattern-desktop.svg')",
            'card-mobile-pattern':"url('~/images/bg-pattern-mobile.svg')"
        },
    }
  },
  plugins: [],
}
