# Chapter 9: Comprehensive information on SEO in PWAs
 

**Google's desire to make Google Search mobile-friendly has been loud and clear for years. In the beginning, it took the form of a delicate suggestion, but with the introduction of the mobile-first index, being mobile-friendly has become an obligation for website owners. That was the moment when PWA technology quickly started to gain fame as an easy-to-use answer to this problem. Indeed, it provides the best possible UX and has Google's support, but what about SEO-controversial JavaScript, the core of PWA?**

------

**[Sign up for updates on The PWA Book](https://divante.com/pwabook#form)** ⭐️   

------
 
 
**Table of content**

- PWAs in the world of SEO
- PWA SEO Best Practices
  - Basic SEO principles
- How to make a PWA SEO-friendly?
- SEO benefits of PWAs
- Summary

------

But first - a disclaimer. PWA is a standard started and promoted by Google, and while there is no evidence that it is a ranking factor, it definitely shouldn't be neglected. Why? Users' attention is at stake. Google can't allow them to favour native apps over traditional websites even though promoting PWAs may, at some point, cannibalize Google Play. Since most of Google's revenues come from ads in Google Search, not Google Play, Google needs to hold on to the advantage in Search by all means. It is the foundation of its market position.

## PWAs in the world of SEO

The investment in creating a PWA designed to deliver a better mobile web search experience seems to be a natural choice in the mobile era. Progressive Web Apps provide an astonishing and multiplatform user experience but are also crawler-friendly and indexable, which—in theory—should be the perfect mix. Yet, JavaScript, which is the foundation of every PWA, may still cause some controversy in the SEO world.

For years Googlebot couldn't crawl JavaScript code. It was first announced that it is generally able to render and understand JS-powered websites in 2015, but even three years later, there were still obstacles to effectively crawling apps based on pure JS.

[John Mueller, senior Webmaster Trends Analyst from Google](https://twitter.com/kimdewe/status/1018865678504419329), claimed there are some JS-powered sites on which Googlebot will be able to handle client-side JS. Yet, using the word "some" was a strong suggestion that there were also some problems with it.


![Kim Dewe's comment on PWAs](/pwabook/chapter/assets/Chapter_9.png)

Those times are mostly gone since Google announced that it had updated its Web Rendering Service. Now Googlebot supports over 1000 new features, e.g., ES6 and more modern JavaScript features, IntersectionObserver for lazy-loading, Web Components v1 APIs (more: [Webmaster Central Blog](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html)), but many SEO specialists remain distrustful. And they have a right to feel that way as Google still recommends reducing reliance on JavaScript [using it "responsibly"](https://www.searchenginejournal.com/google-recommends-using-javascript-responsibly/312257/).

[Webmaster Central Blog](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html) contains a more direct suggestion:

You should check if you're transpiling or use polyfills specifically for Googlebot and if so, evaluate if this is still necessary. There are still some limitations, so check our [troubleshooter for JavaScript-related issues](https://developers.google.com/search/docs/guides/fix-search-javascript) and the [video series on JavaScript SEO](https://www.youtube.com/watch?v=wSwzfEn5-6A&list=PLKoqnv2vTMUPOalM1zuWDP9OQl851WMM9).

JS parse times on mobile can be even 36% longer than on desktop. The size of JS scripts, code quality, and complexity can significantly affect battery life, especially on low-end devices. Longer JS execution times forced on the user's device delay the first paint of the "hero" content that the user sees on the screen. All of these negatively influence metrics such as Time to First Paint, and First Contentful Paint, which measure how fast content is served to users. The Page Speed is a direct ranking factor, but also has an indirect influence on the SEPRs, by increasing the bounce rate and reducing dwell time.

If there are so many red flags, maybe it would be a better solution to resign from JS? Unfortunately, it is not that straightforward. Thanks to JavaScript, websites are "alive" and deliver a better user experience than static ones, built with plain HTML. And it is not only a bit of eye-candy, as the time users spend on sites is also a ranking factor for Google. And so the answer to the question of whether or not JavaScript is harmful to SEO is: it depends. It is hard to say upfront which elements will be successfully interpreted and indexed by Google and which will not.

Google officially stated that *"rendering of JavaScript-powered websites in Google Search is deferred until Googlebot has the resources available to process that content."*

It is, however, hardly an unambiguous tip, and quite a challenge for businesses. The chances of being clicked are lower when the site gets farther off from the first place rank.

As Carolanne Mangles in [Smart Insight](https://www.smartinsights.com/search-engine-marketing/search-engine-statistics/), stated:

Click-through rates do, in fact, decline the further down SERPs the result is positioned. Not only do they decline, but the difference between the 1st and 5th position is the largest decrease with an average of 25%. (...) There is a big difference in CTRs for the 1st and 5th place. Users are less likely to scroll down for information as this requires more time - often, the first couple of results are well trusted because Google has placed them higher than results that can be found on page 3.

## PWA SEO Best Practices

One of the essential advantages of PWAs is their discoverability. However, PWAs themselves don't win top results in SERPs. To be sure that these JS-based entities are indeed discoverable by users, they need to meet some requirements.

However, due to their JS-reliant nature, they can cause some SEO challenges. It is, undoubtedly, bad news. The good news is, however, the challenges concern Single Page Apps in general, and so SEO optimization of PWAs is possible when it follows the basic SEO practices.


### Basic SEO principles

-   Make every page available through a unique URL that lacks fragment identifiers (e.g., #).
-   Specify its canonical URL by using the canonical tag to let search engines know that this URL is the original source of content.
-   In PWAMP configurations, use the rel=" amphtml" tag to specify the AMP URLs.
-   Avoid cloaking (displaying different content for users and bots).
-   Protect the integrity of the website by using HTTPS.
-   Manage redirection correctly in case of any changes to the website.
-   Improve website performance.
-   Implement metadata.


PWAs, in spite of their JS-nature, meet some of these restrictions by default. They are fast, engaging, extremely lightweight, and reliable. However, their SEO-friendliness must be double-checked manually and through SEO tools that crawl the site with and without JS rendering to identify possible gaps. Successful verification solely by Lighthouse might not be enough to take the first place in SERPs. Aleyda Solis, SEO consultant, pointed out, in her [blog](https://www.aleydasolis.com/en/search-engine-optimization/pwas-seo-what-are-they-why-you-need-one-and-how-to-optimize-for-them/), that: 

>The impact of a JS reliant implementation along Google's two indexing waves would likely not be the same. (...) We should validate for ourselves in each case to see up to which point the type of PWA implementation is negatively affecting the site searchability while avoid overlooking "typical" SEO best practices.

-----  

**Find out how to optimize your JS-based Progressive Web App in [SEO for PWA whitepaper](https://info.divante.com/seo-for-pwa)** 📕

-----


## How to make a PWA SEO-friendly

### Double-check the JS code
   
Errors in HTML syntax, such as missing closing tags, are automatically fixed by browsers when parsed. With JavaScript, however, it is not so easy. It is necessary to clean the JS code manually. A JS parsing error can stop Googlebot from crawling and indexing the content. After fixing the errors, Googlebot needs to be warned that the file has been changed.

### Tag hyperlinks
   
Google does not see user-like interactions such as clicking and scrolling, and so the content or links loaded only upon JS events are invisible to the crawlers. To make the hyperlinks visible to search crawlers, the developers have to use standard HTML < a href=”” > tags.

### Transpile ES5+ modules to ES5 for Googlebot

Some features of JavaScript from ES5 are available in the Chrome browser, so they should be used by Google. Services such as Babel allow you to transpile modern JavaScript statements to ES5. It ensures compatibility with Googlebot or older browsers.

### Avoid JS redirects

JavaScript redirects are slower and less reliable than server-side ones. The recommended way is to rely on the latter.

### Make sure Googlebot sees internal links
    
Each site must have a unique URL address so that the browser could have access to it. Deep linking from your homepage to products or categories also allows Googlebot to crawl the content efficiently.
  
### Optimize images

Use the HTML tag < img src=”” >. It allows loading various image resolutions based on the size of the end device. However, the images served by the server should not be bigger than the resolutions the screen can display. If images are lazy-loaded, they should be marked with tags or structural data so that Googlebot can discover them.

### Avoid timeouts

According to many tests, Google waits no longer than 5 seconds for static files to download, and many asynchronous JS-based sites fail to render so fast.

## SEO benefits of PWAs

A significant benefit of Progressive Web Apps is the fact that they speed up the process of the application being indexed. Service worker scripts work separately from websites which enables pages to only request raw data and not styling or layout information. Search engines like smooth, fast apps with limited retention, and reward them with higher visibility.

The higher the position in SERPs, the bigger the chance of winning the user's attention.

>The #1 result in Google's organic search results has an average CTR of 31.7%. On average, moving up one spot in the search results will increase CTR by 30.8%. [source](https://backlinko.com/google-ctr-stats)

Besides, the page speed influences the bounce rate, and this metric that describes user engagement also has an impact on how Google measures the page value.

Not to mention that they have an impact on business effects. User engagement, as part of the customer lifecycle, with a well thought out marketing strategy, can lead to increased conversion rates, retention, and —over the long-term— increased loyalty.
 
  

## Summary

Search engines can't smoothly process applications powered by JavaScript. It is possible, however, to build an SEO-friendly application, and Progressive Web Apps significantly favor these efforts. Many of their features—like speed and engagement—are search-friendly by design, and despite the challenges caused by JavaScript, investing in a PWA is a decision worth taking—not only because of SEO, but also because of UX that goes hand in hand with SEO - just as Google suggests.

---


 **[Check out available PWA development services](https://divante.com/services/progressive-web-apps)** 🔍


---
 
 Go back to [The PWA Book ](https://divante.com/pwabook) main page >
