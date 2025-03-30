function convertToCelsius(temp) {
    return temp * 1.8 + 32;
}


function convertToFahrenheit(temp) {
    return (temp - 32) / 1.8;
}

console.log(convertToCelsius(40));
console.log(convertToFahrenheit(105));