function squareSum(n) {
  let result = 0;
  for (let i = [0]; i < n.length; i++) {
    result += n[i] * n[i];
  }
  return result;
}
