module.exports = {
    title: 'The PWA Book',
    description: 'Inside The PWA Book designers and developers share their knowledge and experience of this modern technology to get you ready for building a fast, reliable and engaging user experience.',
    base: '/pwabook/chapter/',
    themeConfig: {
        bookTitle: 'The PWA Book by Divante',
        logo: '/assets/logo_D_cover.png',
        head: [
          ['link', { rel: 'icon', href: '/assets/favicon.png' }],
        ],
        
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5RZ9N2H');</script>
        <!-- End Google Tag Manager -->
        
        sidebar: [
			['/01-Introduction-to-PWA-technology','1: Introduction to Progressive Web Apps'],	
			['/02-The-history-of-PWAs','2: The history of PWAs'],
			['/03-PWAs-in-the-mobile-first-world','3: PWA in the mobile-first world'],	
			['/04-Benefits-of-PWA','4: Benefits of Progressive Web Apps'],	
			['/05-Improving-mobile-CR-with-PWAs','5: Low mobile conversion rates solved with PWA technology TBA'],
			['/06-PWA-solutions-and-costs','6: Costs and solutions of PWA in eCommerce TBA'],
			['/07-PWA-success-stories','7: Companies that implemented PWA and won TBA']
        ],
        nav: [
         { text: 'FB', link: 'https://www.facebook.com/Divantecom/'},
         { text: 'TT', link: 'https://twitter.com/divanteltd'},
         { text: 'LI', link: 'https://www.linkedin.com/company/divante/'},

       ]
    }
}
