var forEachRight = require('lodash.foreachright');
var parseInt = require('lodash.parseint');

function zeckendorf(n) {
  if (n === 0) {
    return 0;
  }

  var fibs = [1];
  var next = 2;
  while (next <= n) {
    fibs.push(next);
    next += fibs[fibs.length - 2];
  }

  var sb = '';
  forEachRight(fibs, function(fib) {
    sb += fib <= n ? '1' : '0';
    if (fib <= n) {
      n -= fib;
    }
  });
  return parseInt(sb, 10);
}

module.exports = zeckendorf;