// Реализовать функцию indexOfAll.
// Первый аргумент - массив, второй - значение
// Функция возвращает массив со всеми индексами, которые соответствуют переданному значению

function indexOfAll(arr: number[], val: number): number[] {
    return arr.reduce(
        (acc, el, i) => el === val ? acc.push(i) : acc, []
    );
}

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
console.log(indexOfAll([1, 2, 3], 4));
