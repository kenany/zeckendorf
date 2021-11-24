'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');
const forEach = require('lodash.foreach');

const zeckendorf = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(zeckendorf));
});

test('calculates zeckendorf representations', function(t) {
  const EXPECTED = [
    [0, 0],
    [1, 1],
    [2, 10],
    [3, 100],
    [4, 101],
    [5, 1000],
    [6, 1001],
    [7, 1010],
    [8, 10000],
    [9, 10001],
    [10, 10010],
    [11, 10100],
    [12, 10101],
    [13, 100000],
    [14, 100001],
    [15, 100010],
    [16, 100100],
    [17, 100101],
    [18, 101000],
    [19, 101001],
    [20, 101010],
    [21, 1000000],
    [22, 1000001],
    [23, 1000010],
    [24, 1000100],
    [25, 1000101],
    [26, 1001000],
    [27, 1001001],
    [28, 1001010],
    [29, 1010000],
    [30, 1010001],
    [31, 1010010],
    [32, 1010100],
    [33, 1010101]
  ];

  t.plan(EXPECTED.length * 2);

  forEach(EXPECTED, function(n) {
    t.doesNotThrow(function() {
      zeckendorf(n[0]);
    });
    t.equal(zeckendorf(n[0]), n[1]);
  });
});
