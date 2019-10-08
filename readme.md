# Divante.com PWA Book

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
![Divante-logo](http://divante.com/logo-HG.png "Divante")

We are a Software House from Europe, existing from 2008 and employing about 150 people. 
Our core competencies are built around Magento, Pimcore and bespoke software projects 
(we love Symfony3, Node.js, Angular, React, Vue.js). We specialize in sophisticated integration projects trying to 
connect hardcore IT with good product design and UX.

We work for Clients like INTERSPORT, ING, Odlo, Onderdelenwinkel and CDP, the company that produced The Witcher game. 
We develop two projects: [Open Loyalty](http://www.openloyalty.io/ "Open Loyalty") - an open source loyalty 
program and [Vue.js Storefront](https://github.com/DivanteLtd/vue-storefront "Vue.js Storefront").

We are part of the OEX Group which is listed on the Warsaw Stock Exchange. Our annual revenue has been growing at a
minimum of about 30% year on year.

Visit our website [Divante.com](https://divante.com/ "Divante.com") for more information.
