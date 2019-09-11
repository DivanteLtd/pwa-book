# Divante.com PWA eBook

[![pipeline status](https://gitlab.divante.pl/snippety-zaglady/divante.com/pwa-ebook/badges/develop/pipeline.svg)](https://gitlab.divante.pl/snippety-zaglady/divante.com/pwa-ebook/commits/develop)
[![coverage report](https://gitlab.divante.pl/snippety-zaglady/divante.com/pwa-ebook/badges/develop/coverage.svg)](https://gitlab.divante.pl/snippety-zaglady/divante.com/pwa-ebook/commits/develop)

> Divante.com PWA eBook Application

**Table of Contents**
- [Divante.com PWA eBook](#divante.com-pwa-ebook)
	- [Installing/Getting started](#installinggetting-started)
	- [Analysis](#analysis)
	    - [Lint](#lint)
	- [Testing](#testing)
	    - [Unit Tests](#unit-tests)
	    - [End to End](#end-to-end)
	- [Contributing](#contributing)
	- [Deploy](#deploy)
	- [Standards & Code Quality](#standards--code-quality)
	- [About Authors](#about-authors)

## Installing/Getting started
```bash 
git clone ssh://git@gitlab.divante.pl:60022/snippety-zaglady/divante.com/pwa-ebook.git && \
npm install
```

### Compiles and hot-reloads for development
``` bash
npm run serve
```

### Compiles and minifies for production
```bash
npm run build
```

## Analysis
### Lint
```bash
npm run lint
```

## Testing
### Unit Tests
```bash
npm run test
npm run test:coverage
```

### End to End
```bash
npm run test:e2e
npm run test:e2e:open
npm run test:e2e:ci
```

## Deploy
```bash
cd scripts/deploy && \
python3 -m venv env && \
source ./env/bin/activate && \
pip install -r requirements.txt
```

```bash
fab test deploy
```
or
```bash
fab prod deploy
```

Arguments:
```bash
fab dev deploy:branch=develop
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Standards & Code Quality
This module respects all Pimcore5 code quality rules and our own PHPCS and PHPMD rulesets.

## About Authors
![Divante-logo](http://divante.co/logo-HG.png "Divante")
We are a Software House from Europe, existing from 2008 and employing about 150 people. 
Our core competencies are built around Magento, Pimcore and bespoke software projects 
(we love Symfony3, Node.js, Angular, React, Vue.js). We specialize in sophisticated integration projects trying to 
connect hardcore IT with good product design and UX.

We work for Clients like INTERSPORT, ING, Odlo, Onderdelenwinkel and CDP, the company that produced The Witcher game. 
We develop two projects: [Open Loyalty](http://www.openloyalty.io/ "Open Loyalty") - an open source loyalty 
program and [Vue.js Storefront](https://github.com/DivanteLtd/vue-storefront "Vue.js Storefront").

We are part of the OEX Group which is listed on the Warsaw Stock Exchange. Our annual revenue has been growing at a
minimum of about 30% year on year.

Visit our website [Divante.co](https://divante.co/ "Divante.co") for more information.
