# zeckendorf

Calculate the [Zeckendorf representation][] of an integer.

## Example

``` javascript
var zeckendorf = require('zeckendorf');

zeckendorf(33);
// => 1010101
```

## Installation

``` bash
$ npm install zeckendorf
```

## API

``` javascript
var zeckendorf = require('zeckendorf');
```

### `zeckendorf(n)`

Calculates and returns the Zeckendorf form of _Number_ `n`. The returned
_Number_ represents a table of Fibonacci numbers, so `zeckendorf(11)` returns
`10100`, which represents: `1*8 + 0*5 + 1*3 + 0*2 + 0*1`.


   [Zeckendorf representation]: https://en.wikipedia.org/wiki/Zeckendorf's_theorem