const findTheOldest = function (people) {
    let oldest = {};
    let maxAge = 0;
    people.forEach((person) => {
        if (person.yearOfDeath === undefined) {
            let age = new Date().getFullYear()- person.yearOfBirth;
            if (age > maxAge) {
                maxAge = age;
                oldest = person;
            }
        }
        else {
            let age = person.yearOfDeath - person.yearOfBirth;
            if (age > maxAge) {
                maxAge = age;
                oldest = person;
            }
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
