// Реализовать функцию without.
// Первый аргумент - массив, второй и последующие - значения
// Функция возвращает новый массив, который наполнен теми значениями,
// которые не передавались как второй и последующие аргументы функции

function without(arr: number[], ...args: number[]): number[] {
    return arr.filter(el => !args.includes(el));
}

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 10, 20, 5], 1, 2, 5));

