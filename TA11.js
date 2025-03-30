function duplicates(array) {
    let result = new Set();    
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                result.add(array[i]);
                break;
            }
        }
    }
    return result.size;
}

console.log(duplicates([1, 2, 2, 3, 4, 4, 4, 5]))