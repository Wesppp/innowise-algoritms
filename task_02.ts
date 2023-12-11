// Функция принимает 2 массива.
// Возвращает новый массив, который состоит только из тех элементов,
// которые встретились в одном массиве, но не встретились в другом

function arrayDiff(arr1: any[], arr2: any[]): any[] {
    return [...arr1.filter(el => !arr2.includes(el)), ...arr2.filter(el => !arr1.includes(el))];
}

console.log(arrayDiff([1, 2, 3], [1, 2, 4]));
console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4']));
