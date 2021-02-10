
exports.min = function min (array) {
  return array && array.length ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return array && array.length ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
  if (!array) {
    return 0;
  }

  const summ = array.reduce((a, b) => a + b, 0);
  const avg = (summ / array.length) || 0;

  return avg;
}
