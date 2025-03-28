function removeFromArray(array, item) {
    array.splice(array.indexOf(item), 1)
    return array
}

var x = removeFromArray([1, 2, 3], 2)
console.log(x)
