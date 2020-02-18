module.exports = {
    title: 'The PWA Book',
    description: 'Inside The PWA Book designers and developers share their knowledge and experience of this modern technology to get you ready for building a fast, reliable and engaging user experience.',
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    ],
    base: '/pwabook/chapter/',
    plugins: [['vuepress-plugin-google-tag-manager', {'gtm': 'GTM-5RZ9N2H'}]],
    themeConfig: {
        bookTitle: 'The PWA Book by Divante',
        logo: '/assets/logo_D_cover.png',
        sidebar: [
          ['/01-introduction-to-pwa-technology','1. Introduction to Progressive Web Apps'],
          ['/02-the-history-of-pwas','2. The history of PWAs'],
          ['/03-pwas-in-the-mobile-first-world','3. PWA in the mobile-first world'],
          ['/04-benefits-of-pwa','4. Benefits of Progressive Web Apps'],
          ['/05-improving-mobile-cr-with-pwas','5. Low mobile conversion rates solved with PWA technology'],
          ['/06-pwa-solutions-and-costs','6. Costs and solutions of PWA in eCommerce'],
          ['/07-pwa-success-stories','7. Companies that implemented PWA and won'],
	        ['/08-features-of-pwa','8. Features of Progressive Web Apps'],
          ['/09-seo-in-pwas','9. Comprehensive information on SEO in PWAs'],
	        ['/10-technical-aspects-of-pwas','10. Technical aspects of PWAs NEW']
        ],
        nav: [
         { text: 'FB', link: 'https://www.facebook.com/Divantecom/'},
         { text: 'TT', link: 'https://twitter.com/divanteltd'},
         { text: 'LI', link: 'https://www.linkedin.com/company/divante/'},
       ]
    }
};
