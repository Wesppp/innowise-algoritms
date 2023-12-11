// Написать функцию, которая возвращает минимальное и максимальное количество заданного списка / массива

function minMax(arr: number[]): number[] {
    return [Math.min(...arr), Math.max(...arr)]
}

console.log(minMax([1,2,3,4,5]));
console.log(minMax([2334454,5]));
console.log(minMax([1]));
