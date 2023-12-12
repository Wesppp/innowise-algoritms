// Первый аргумент - массив, второй - колбек-функция, которая применяется на массив
// Колбек-функция применяется на каждый элемент массива и проверяет условие
// Если хотя бы один раз колбек-функция вернула true, то any возвращает true
// Иначе - false

function any(arr: number[], cb: (x: number) => boolean = x => x > 2): boolean {
    return cb ? arr.some(cb) : arr.some((el) => el);
}

console.log(any([0, 1, 2, 0], x => x >= 2));
console.log(any([0, 0, 1, 0]));
console.log(any([0, 0, 0, 0]));
