function seriesOfNumbers(a) {
  let result = [1];
  let length = 0;

  if (a === 0 || a === 1) return 1;

  if (a % 2 === 0) length = a - 1;
  else length = a;

  for (let i = 1; i < length; i++) {
    result.push(result[i - 1] + 2);
  }

  return result.join(", ");
}

console.log(seriesOfNumbers(4));
