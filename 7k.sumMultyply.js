var sumAndMultiply = function (sum, multiply) {
  for (var i = 0; i <= sum; i++) {
    for (var j = 0; j <= i; j++) {
      if (i + j == sum && i * j == multiply)
        return [i, j].sort(function (a, b) {
          return a - b;
        });
    }
  }
  return null;
};
