module.exports = {
    title: 'The PWA Book',
    description: 'PWA Book on vuepress',
    base: '/pwabook/chapter/',
    themeConfig: {
        logo: '/assets/logo_light_blue.png',
        
        sidebar: [
			['/chapter1','1: Introduction to Progressive Web Apps'],	
			['/chapter2','2: The history of PWA development'],
			['/chapter3','3: Progressive Web Apps in the mobile-first world'],	
			['/chapter4','4: Benefits of Progressive Web Apps'],	
			['/chapter5','5: Low mobile conversion rates solved with PWA technology'],
			['/chapter6','6: Costs and solutions of PWA in eCommerce'],
			['/chapter7','7: Companies that implemented PWA and won']
        ],
        nav: [
         { text: 'Twitter', link: 'https://twitter.com/divanteltd' },
       ]
    }
}
