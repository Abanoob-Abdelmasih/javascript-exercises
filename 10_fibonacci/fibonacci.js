const fibonacci = function (len) {
  if (len < 1) return "OOPS";
  let num1 = 1,
    num2 = 1,
    next,
    count = 2,
    result = [1, 1];

  while (count < len) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    result.push(next);
    count++;
  }
  return result[len - 1];
};

// Do not edit below this line
module.exports = fibonacci;
