function solution(str) {
  let revers = "";
  for (i = 0; i < str.length; i++) {
    revers = str[i] + revers;
  }
  return revers;
}
