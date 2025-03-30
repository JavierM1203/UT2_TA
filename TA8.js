function findTheOldest(array) {
    var result;
    var oldest = 0;
    for (const elem of array) {
        if (elem.yearOfDeath - elem.yearOfBirth > oldest) {
            result = elem
            oldest = elem.yearOfDeath - elem.yearOfBirth
        }
    }
    return result;
}

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people))