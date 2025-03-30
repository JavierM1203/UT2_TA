function getSum(array) {
    return array.reduce((acc, num) => acc + num, 0);
}

console.log(getSum([1, 2, 3, 4, 5, 6, 7, 8]))