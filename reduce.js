function soma(array) {
    return array.reduce((resultado, num) => {
        return resultado + num
    }, 0);
}

console.log(soma([1, 2, 3, 5]))