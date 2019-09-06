## versioned-vue-component

server side render vue component by vue version

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/versioned-vue-ssr.svg?style=flat-square
[npm-url]: http://npmjs.org/package/versioned-vue-ssr
[travis-image]: https://img.shields.io/travis/yiminghe/versioned-vue-ssr.svg?style=flat-square
[travis-url]: https://travis-ci.org/yiminghe/versioned-vue-ssr
[coveralls-image]: https://img.shields.io/coveralls/yiminghe/versioned-vue-ssr.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yiminghe/versioned-vue-ssr?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=10.0.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/versioned-vue-ssr.svg?style=flat-square
[download-url]: https://npmjs.org/package/versioned-vue-ssr

### usage

```js
const render = require("versioned-vue-component");
expect(
  await render.renderComponentCodeToString({
    props: {
      title: "my"
    },
    // version:'16.9.0', // currently only support 16.9.0
    // build by rollup iife
    componentCode: `
        var x=(function(){ .... })();
      `
  })
).toMatchInlineSnapshot(`"<div data-server-rendered=\"true\">
                                 my
                               </div>"`);
```

### methods

- renderComponentCodeToString
