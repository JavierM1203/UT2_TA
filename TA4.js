function sumAll(a, b) {
    var result = 0;
    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
}

console.log(sumAll(2, 4));