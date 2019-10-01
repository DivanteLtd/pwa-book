module.exports = {
    title: 'The PWA Book',
    description: 'Inside The PWA Book designers and developers share their knowledge and experience of this modern technology to get you ready for building a fast, reliable and engaging user experience.',
    base: '/pwabook/chapter/',
    themeConfig: {
        bookTitle: 'The PWA Book by Divante',
        logo: '/assets/logo_light_blue.png',
        head: [
            ['link', { rel: 'icon', href: '/assets/favicon.png' }],
        ],
        
        sidebar: [
			['/01-Introduction-to-PWA-technology','1: Introduction to Progressive Web Apps'],	
			['/02-The-history-of-PWAs','2: The history of PWAs'],
			['/03-PWAs-in-the-mobile-first-world','3: PWA in the mobile-first world'],	
			['/04-Benefits-of-PWA','4: Benefits of Progressive Web Apps'],	
			['/05-Improving-mobile-CR-with-PWAs','5: Low mobile conversion rates solved with PWA technology'],
			['/06-PWA-solutions-and-costs','6: Costs and solutions of PWA in eCommerce'],
			['/07-PWA-success-stories','7: Companies that implemented PWA and won']
        ],
        nav: [
         { text: 'Follow us:'},
         { image: '/assets/logo_FB.png', link: 'https://www.facebook.com/Divantecom/'},
         { text: 'Twitter', link: 'https://twitter.com/divanteltd'},
         { text: 'Linkedin', link: 'https://www.linkedin.com/company/600853/admin/'},

       ]
    }
}
