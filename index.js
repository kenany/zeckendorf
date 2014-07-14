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
  for (var i = fibs.length - 1; i >= 0; i--) {
    var fib = fibs[i];
    sb += fib <= n ? '1' : '0';
    if (fib <= n) {
      n -= fib;
    }
  }
  return parseInt(sb, 10);
}

module.exports = zeckendorf;