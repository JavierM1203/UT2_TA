function repeatString(texto, repeticiones) {
    let result = ""
    for (let i = 0; i < repeticiones; i++) {
        result += texto +"\n";
    }
    console.log(result)
}

repeatString("Hola, mundo!", 5);