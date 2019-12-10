# Chapter 10: Technical aspects of PWAs
 

**The business advantages of Progressive Web Apps are easy to see since PWAs are an advanced website able to provide all the benefits of native apps. A technical perspective, however, requires a little bit more precision in terms of describing this, still unusual, fusion.**

------

**[Sign up for updates on The PWA Book](https://divante.com/pwabook#form)** ⭐️   

------
 
 
**Table of content**

- The PWA Checklist
  - HTTPS
  - A web app manifest
  - Service workers
- Progressive Web App performance 
- How a PWA can affect your business results
- Time & Cost of PWA Implementation

---------

## The PWA Checklist

Jeremy Keith, in the article "[What is a Progressive Web App?](https://adactio.com/journal/13098), wrote:

>If you’re talking to the business people, tell them about the return on investment you get from Progressive Web Apps. If you’re talking to the marketing people, tell them about the experiential benefits of Progressive Web Apps. But if you’re talking to developers, tell them that a Progressive Web App is a website served over HTTPS with a service worker and manifest file.

"Progressive Web App" is more an umbrella definition than the name of a specific technology, but despite that, it is relatively easy to point out what makes a web app a PWA.

[Baseline Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist)

To be considered a PWA, websites must meet most of the above checklist requirements. However, three of them - according to Jeremy Keith's technical definition - are crucial.

### HTTPS

The service worker - a core technology of PWA technology that delivers offline functionality and ultra-fast performance - requires a secure environment to run. Enabling HTTPS on the server is a must-have in creating a PWA, but it shouldn't be a problem since, for some time now, the Chrome browser already marks all websites not using that protocol as insecure. Providing the HTTPS protocol has become commonplace. Most host providers offer easy-to-use in-house tools to switch over to HTTPS; in other cases, The plugin “Let's encrypt” may be helpful.

### A web app manifest

A web app manifest is a simple JSON file filled with all the necessary PWA metadata like the app name, language, icon, start URL, orientation, scope, theme color, etc. It tells a browser how to display the app.

PRO TIP: It is worth verifying whether or not the web app manifest is set up correctly with [Lighthouse](https://divante.com/blog/checking-up-ecommerce-with-the-lighthouse-tool/), available in the Chrome DevTools.

An exemplary manifest.json file for a Progressive Web App:
  
{
"short_name": "Name",
"name": "NM",
"icons": [
{
"src": "/images/icons-S.png",
"type": "image/png",
"sizes": "192x192"
},
{
"src": "/images/icons-M.png",
"type": "image/png",
"sizes": "512x512"
}
],
"start_url": "/name/?source=pwa",
"display": "standalone",
"theme_color": "#3367D6"
}

>💡 **PRO TIP:** Creating a web app manifest should not be a problem since it can be generated automatically with e.g., a [PWA Builder](https://www.pwabuilder.com/) or [Web App Manifest Generator](https://app-manifest.firebaseapp.com/).

### Service workers

This core PWA technology is a JavaScript file that runs in the background in the browser and is directly responsible for providing all core features of the PWA, such as push notifications or background synchronization. Developers can use them in many different ways, but - in general - they allow them to control how the browser handles network requests and asset caching.

The web standard used to create service workers is now [Google WorkBox](https://developers.google.com/web/tools/workbox). That set of libraries and Node modules enables developers to wrap the boilerplate code with methods that they can use to implement service workers. WorkBox is a well-defined, and easy-to-use tool to apply various caching strategies, e.g., precaching, runtime caching strategies, and offline support. By using it, it is possible to create a well-functioning PWA with less code and a lower risk of errors.

## Progressive Web App performance

Credit for both of the essential [benefits of a PWA](https://divante.com/pwabook/chapter/08-features-of-PWA.html#the-core-features-of-a-pwa) - its ultra-fast performance and the ability to work offline - should be given to service workers. They check every time to see if the response for a particular request is already in the cache. By omitting the server, they save valuable microseconds and eliminate the dependency on the network.

A PWA can work wholly offline, but - contrary to common opinion - it is not its most desired feature; being fast and independent from an unreliable network - certainly is. Service workers can do both: improve a site’s performance and reliability as well as make an entire application work offline.

The impact of PWA technology on web page performance can be astonishing, and, more importantly, it has been proved in the field. For example, Tinder cut load times from 11.91 seconds to 4.69 seconds with their PWA, and Uber's PWA takes less than 3 seconds to load on 2G networks.

For online businesses, speed means money. According to [Firefox](https://blog.mozilla.org/metrics/2010/04/05/firefox-page-load-speed-part-ii/), a decrease of 2.2 seconds of the average page load time increased download conversions by 15.4%. Aberdeen Group (quoted after [Forbes](https://www.forbes.com/sites/rogerdooley/2012/12/04/fast-sites/#73e3639b53cf)) found that "a 1-second delay in page load time equals 11% fewer page views, a 16% decrease in customer satisfaction, and 7% loss in conversions." [Microsoft's Bing](http://www.mcrinc.com/Documents/Newsletters/201110_why_web_performance_matters.pdf) added that "a mere two-second delay led to a 1.8% drop off in queries, a 3.75% reduction in clicks, more than a 4% loss in satisfaction and, most importantly, a 4.3% loss in revenue per visitor".


## How a PWA can affect your business results

**[TOP 10 business benefits of PWA](https://divante.com/blog/10-benefits-pwa-boost-your-business/)**

Since PWAs are both ultra-fast and independent from a poor network connection, it means that they are mobile-friendly, so their impact on the business results is a no-brainer.

After Google's official shift to mobile-first indexing, mobile-friendliness is not just a kind request but a must. Moreover, it should come as no surprise.

Google has been talking about its "mobile-friendly policy" over and over again for years. In 2014, it started highlighting optimized pages using a special signature. In 2015, it began rolling out its "mobile-friendly" update, which made mobile-friendliness a stronger ranking factor, and the first mention of the mobile-first index occurred in 2016.

There is no evidence that the technologies forged in Mountain View - PWA and AMP - are direct ranking factors, but both of them support the general "mobile idea". And Google doesn't shy away from admitting that it is critical.

On the [Google Webmaster Central Blog](https://webmasters.googleblog.com/2019/05/mobile-first-indexing-by-default-for.html), it wrote:

>While we continue to support responsive web design, dynamic serving, and separate mobile URLs for mobile websites, we recommend responsive web design for new websites. Because of issues and confusion we've seen from separate mobile URLs over the years, both from search engines and users, we recommend using a single URL for both desktop and mobile websites.

PWA technology - by combining the UX of a native app with the benefits of the mobile web under one URL - is growing into a prominent, [SEO-friendly](https://divante.co/blog/javascript-seo-pwa/) answer to this change, which also leads to conversion rate improvement.

**Here are some examples:**

5miles:

-   50% decrease in bounce rates
-    30% increase in time spent on site    
-   30% better conversion for users who arrived via Add to Home screen

AliExpress:

-   104% more new users across all browsers
-   82% increase in iOS conversion rate
-   2x more pages visited per session per user across all browsers
-   74% increase in time spent per session across all browsers

Jumia:

-   33% higher conversion rate
-   50% lower bounce rate
-   12x more users versus native apps (Android & IOS)   
-   5x less data used


## Time & Cost of PWA Implementation


The benefits of a PWA are not limited to UX and its impact on conversion rates. A PWA is also a justified financial choice on how to approach mobile these days. Stores built with PWA technology save up to 75% of the costs of a native app (both development and maintenance), and a PWA can be added to the eCommerce platform via API in just three months.

Building a PWA from scratch will take something between 3400 wh (for a small app) to 9000 wh (a dedicated project we’ve done). This means a cost between $400K and $1m.

Using a cloud platform will be at least 75% cheaper, and Time to Market will also be 75% shorter (2-3 months instead of 8-12 months).

[More about building or buying a PWA for in commerce in the article by Tom Karwatka](https://divante.com/blog/pwa-ecommerce-buy-or-build/)

---------


 **[Check out available PWA development services](https://divante.com/services/progressive-web-apps)** 🔍


---
 
 Go back to [The PWA Book ](https://divante.com/pwabook) main page >
