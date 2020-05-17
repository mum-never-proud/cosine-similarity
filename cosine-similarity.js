function dotProduct(x, y) {
  const len = Math.min(x.length, y.length);
  let result = 0, i = 0;

  for (; i < len; i++) {
    result += x[i] * y[i];
  }

  return result;
}

function normalize(x) {
  return Math.sqrt(x.reduce((a, b) => a + b * b, 0));
}

function assertArray(x) {
  if (!x || x.constructor.name !== 'Array') {
    throw new TypeError('cosine similarity can be computed only between two array of numbers');
  }
}

module.exports = function (x, y) {
  assertArray(x);
  assertArray(y);

  return Number(
    (dotProduct(x, y) / (normalize(x) * normalize(y))).toFixed(3)
  );
}
