const repeatString = function (string, n) {
  let text = "";
  if (n >= 0) {
    for (let i = 0; i < n; i++) {
      text += string;
    }
    return text;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
