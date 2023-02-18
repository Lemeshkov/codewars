function openOrSenior(data) {
  let result = [];
  for (let index = 0; index < data.length; index++) {
    if (data[index][0] > 54 && data[index][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}
