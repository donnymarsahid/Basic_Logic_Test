const logicTest = (number) => {
  let result = [];
  for (let i = 1; i <= number; i++) {
    result.push(i);
    if (
      i === 3 ||
      i === 6 ||
      i === 12 ||
      i === 15 ||
      i === 18 ||
      i === 21 ||
      i === 24 ||
      i === 27 ||
      i === 30 ||
      i === 33 ||
      i === 36 ||
      i === 39 ||
      i === 42 ||
      i === 45
    ) {
      result.push("Frontend");
    }
  }
  return result;
};

console.log(logicTest(50));
