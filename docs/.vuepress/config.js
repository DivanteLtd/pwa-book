module.exports = {
    title: 'PWA Book',
    description: 'PWA Book on vuepress',
    base: '/pwabook/chapter/',
    themeConfig: {
        logo: '/assets/logo.png',
        
        sidebar: [
			['/chapter1','Chapter 1: INTRODUCTION TO PROGRESSIVE WEB APPS'],	
			['/chapter2','Chapter 2: THE HISTORY OF PWA DEVELOPMENT']
        ],
        nav: [
         { text: 'Twitter', link: 'https://twitter.com/divanteltd' },
       ]
    }
}
