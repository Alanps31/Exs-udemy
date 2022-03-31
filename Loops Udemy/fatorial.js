function fatorial(num) {
    let fator = num

    for(let i = 1; i < num; i++) {
        fator = fator * (num - i)
    }
    return fator
}

console.log(fatorial(5))