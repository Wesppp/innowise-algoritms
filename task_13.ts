// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет в нём элементы между a и b и отдаёт массив этих элементов.

function filterRange(arr: number[], a: number, b: number): number[] {
    return arr.reduce((acc, el) => el > a && el < b ? acc.push(el) : acc, []);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log( filtered );

