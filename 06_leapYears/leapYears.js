const leapYears = function (num) {
  if ((0 == num % 4) && (0 != num % 100) || (0 == num % 400)) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;

// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
