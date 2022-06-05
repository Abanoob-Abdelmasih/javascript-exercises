const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentPersonAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);

    return oldestAge < currentPersonAge ? currentPerson : oldest;
  });

  function getAge(death, birth) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }
};

// Do not edit below this line
module.exports = findTheOldest;
