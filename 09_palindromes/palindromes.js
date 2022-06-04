const palindromes = function (a) {
  a = a.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g, "").toLowerCase();
  const noSymbols = a.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g, "").toLowerCase();
  const reveseString = noSymbols.split("").reverse().join("");
  if (reveseString === a.toLowerCase()) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
