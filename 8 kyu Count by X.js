function countBy(x, n) {
  let result = [];
  for (let i = x, times = n; times > 0; i += x) {
    result.push(i);
    times--;
  }
  return result;
}
