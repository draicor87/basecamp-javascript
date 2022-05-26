const maçã = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const numeros = [1, 2];

console.log('this -> maçã', mapComThis(numeros, maçã));
console.log('this -> laranja', mapComThis(numeros, laranja));

