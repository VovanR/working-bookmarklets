# %NAME%

<img align="right" width="120" height="120"
     src="./logo.svg" alt="%NAME% logo">

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> My working bookmarklets

Demo: [vovanr.github.io/%NAME%][demo]

![](preview.png)

## Install

```shell
npm install --save %NAME%
```

## Usage

See: [example](example/app.jsx)

```js
var foo = require("%NAME%");

foo();
//=> Foo
```

## API

### foo(bar, [options])

#### bar

Type: `string`

Bar to foo

#### options

Type: `Object`

##### baz

Type: `string`<br>
Default: `-`

## License

MIT © [Vladimir Rodkin](https://github.com/VovanR)

[demo]: https://vovanr.github.io/%NAME%
[commitizen-url]: https://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[codestyle-url]: https://github.com/xojs/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square
[npm-url]: https://npmjs.org/package/%NAME%
[npm-image]: https://img.shields.io/npm/v/%NAME%.svg?style=flat-square
[travis-url]: https://travis-ci.org/VovanR/%NAME%
[travis-image]: https://img.shields.io/travis/VovanR/%NAME%.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/VovanR/%NAME%
[coveralls-image]: https://img.shields.io/coveralls/VovanR/%NAME%.svg?style=flat-square
[depstat-url]: https://david-dm.org/VovanR/%NAME%
[depstat-image]: https://david-dm.org/VovanR/%NAME%.svg?style=flat-square
[depstat-dev-url]: https://david-dm.org/VovanR/%NAME%
[depstat-dev-image]: https://david-dm.org/VovanR/%NAME%/dev-status.svg?style=flat-square
