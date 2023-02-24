var number = function (busStops) {
  let result = 0;
  for (let index = 0; index < busStops.length; index++) {
    result += busStops[index][0] - busStops[index][1];
  }
  return result;
};
