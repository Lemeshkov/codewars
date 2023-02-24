function sumArray(array) {
  if (!array || array.length < 2) return 0;
  let min = array[0],
    max = array[0],
    sum = 0;

  array.forEach((el) => {
    if (el < min) min = el;
    if (el > max) max = el;
    sum += el;
  });
  return sum - min - max;
}
