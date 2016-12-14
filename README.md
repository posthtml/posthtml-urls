# posthtml-urls [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

> PostHTML plugin for transforming URLs.


## Installation

[Node.js](http://nodejs.org) `>= 6` is required. To install, type this at the command line:

```shell
npm install posthtml-urls
```


## Usage

```js
const posthtml = require('posthtml');
const urls = require('posthtml-urls');

const options = {
  eachURL: (url, attr, element) => `http://domain.com/${url}`
};

posthtml()
  .use( urls(options) )
  .process('<a href="link.html">link</a>')
  .then(result => console.log(result.html));
//-> <a href="http://domain.com/link.html">link</a>
```


## Options

### `eachURL`
Type: `Function`  
Default value: `undefined`  
A callback function ran for each URL value found. You can return either a synchronous value or a `Promise`.

### `filter`
Type: `Object`  
Default value: [`{…}`](https://github.com/posthtml/posthtml-urls/blob/master/lib/defaultOptions.js)  
The elements and attributes for which to search. An attribute value can optionally be a function, for deeper filtering.


## FAQ
1. **How can I filter `<style>` elements and `style` attributes?**  
Use [posthtml-postcss](https://npmjs.com/posthtml-postcss) and [postcss-url](https://npmjs.com/postcss-url).


[npm-image]: https://img.shields.io/npm/v/posthtml-urls.svg
[npm-url]: https://npmjs.com/package/posthtml-urls
[travis-image]: https://img.shields.io/travis/posthtml/posthtml-urls.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-urls
[coveralls-image]: https://img.shields.io/coveralls/posthtml/posthtml-urls.svg
[coveralls-url]: https://coveralls.io/github/posthtml/posthtml-urls
