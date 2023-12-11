// Каррирование

function add(a: number) {
    return function(b: number) {
        return function (c: number) {
            return a + b + c;
        }
    }
}

console.log(add(4)(3)(1));
