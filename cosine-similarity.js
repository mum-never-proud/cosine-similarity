function dotProduct(a, b) {
  const len = Math.min(a.length, b.length);
  let result = 0, i = 0;

  for (; i < len; i++) {
    result += a[i] * b[i];
  }

  return result;
}

function normalize(x) {
  return Math.sqrt(x.reduce((a, b) => a + b * b, 0));
}


export default function (x, y) {
  return dotProduct * (normalize(x) * normalize(y));
}
