const forEachRight = require('lodash.foreachright');

/**
 * @param {number} n
 * @returns {number}
 */
function zeckendorf(n) {
  if (n === 0) {
    return 0;
  }

  const fibs = [1];
  let next = 2;
  while (next <= n) {
    fibs.push(next);
    next += fibs.at(-2);
  }

  let sb = '';
  forEachRight(fibs, (fib) => {
    sb += fib <= n ? '1' : '0';
    if (fib <= n) {
      n -= fib;
    }
  });
  return Number.parseInt(sb, 10);
}

module.exports = zeckendorf;
