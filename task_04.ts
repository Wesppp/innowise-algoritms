// Функция принимает 2 массива, и возвращает массив объединенных значений,
// без дублирования

function union<T>(arr1: T[], arr2: T[]): T[] {
    return Array.from(new Set([...arr1, ...arr2]));
}

console.log(union<number>([5, 1, 2, 3, 3], [4, 3, 2]));
console.log(union<number>([5, 1, 3, 3, 4], [1, 3, 4]));

