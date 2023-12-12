// Функция принимает 2 массива.
// Возвращает новый массив, который состоит только из тех элементов,
// которые встретились в одном массиве, но не встретились в другом

function arrayDiff<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1.filter(el => !arr2.includes(el)), ...arr2.filter(el => !arr1.includes(el))];
}

console.log(arrayDiff<number>([1, 2, 3], [1, 2, 4]));
console.log(arrayDiff<number | string>([1, 3, 3, 4], [1, 3, '4']));
