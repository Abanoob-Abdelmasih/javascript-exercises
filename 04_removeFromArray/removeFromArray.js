const removeFromArray = function (a, ...b) {
  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) {
      a.splice(a.indexOf(b[i]), 1);
    }
  }
  return a;
};

// Do not edit below this line
module.exports = removeFromArray;
