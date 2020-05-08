# The PWA Book | Divante.com

OPEN GUIDE TO PROGRESSIVE WEB APPS

Progressive Web Apps are changing web and app design as we know it. Inside The PWA Book designers and developers share their knowledge and experience of this modern technology to get you ready for building a fast, reliable and engaging user experience. 

Learn more about it at [the official webpage of The PWA Book](https://divante.com/pwabook)

**Table of Contents**
- [The PWA Book]
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

### Compiles and minifies for production
```bash
npm run docs:build
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

This publication has been created by Divante.

![Divante-logo](/pwabook/chapter/assets/logo_Divante.png "Divante")

Divante is a global eCommerce solutions, experimentation, and thought leader. Our team of 
250+ experts empowers eCommerce for both the B2B and B2C segments, working with companies like Bosch, SAP, and Tally Weijl. We create rapid, high-functioning MVPs and integrate technologies that will be the trends of tomorrow. 

As a digital pioneer and strategic partner, we bring developers, product designers, analysts, project managers, and testers together to empower eCommerce from every angle. That means building in enterprise open-source software ecosystems and customized software solutions, as well as offering innovative solutions and support for systems like ERP, PIM, and CRM.

At Divante, we trust in cooperation and actively contribute to the open-source community, as well as creating our own products like[Open Loyalty](http://www.openloyalty.io/ "Open Loyalty") and [Vue Storefront](https://vuestorefront.io "Vue Storefront").

For more information, please visit [Divante.com](https://divante.com/ "Divante.com").
