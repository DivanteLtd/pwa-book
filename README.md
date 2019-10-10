# The PWA Book | Divante.com

> Divante.com PWA Book Application

**Table of Contents**
- [Divante.com PWA Book](#divante.com-pwa-book)
	- [Installing/Getting started](#installinggetting-started)
	- [Deploy](#deploy)
	- [About Authors](#about-authors)

## Installing/Getting started
```bash 
npm install
```

### Compiles and hot-reloads for development
``` bash
npm run docs:dev
```
or
``` bash
yarn docs:dev
```

### Compiles and minifies for production
```bash
npm run docs:build
```
or
```bash
yarn docs:build
```

## Deploy
```bash
cd scripts/deploy && \
    python3 -m venv env && \
    source ./env/bin/activate && \
    pip3 install -r requirements.txt
```

```bash
fab test deploy
```
or
```bash
fab prod deploy
```

## About Authors

This module has been created by Divante eCommerce Software House.

![Divante-logo](http://divante.com/logo-HG.png "Divante")

Divante is an expert in providing top-notch eCommerce solutions and products for both B2B and B2C segments. Our core competencies are built around Magento, Pimcore and bespoke software projects (we love Symfony3, Node.js, Angular, React, Vue.js). We specialize in sophisticated integration projects trying to connect hardcore IT with good product design and UX.

We work with industry leaders, like T-Mobile, Continental, and 3M, who perceive technology as their key component to success. In Divante we trust in cooperation, that's why we contribute to open source products and create our own products like [Open Loyalty](http://www.openloyalty.io/ "Open Loyalty") and [VueStorefront](https://github.com/DivanteLtd/vue-storefront "Vue Storefront").

Divante is part of the OEX Group which is listed on the Warsaw Stock Exchange. Our annual revenue has been growing at a minimum of about 30% year on year.

For more information, please visit [Divante.co](https://divante.co/ "Divante.co").
