function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [5, 7, 3, 56, 68, 92];

console.log(filtraPares(meuArray));

