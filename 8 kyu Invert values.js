function invert(array) {
  const someArr = [];
  for (var i = 0; i < array.length; i++) {
    someArr.push(-array[i]);
  }
  return someArr;
}
