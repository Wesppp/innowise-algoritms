// Реализовать функцию forEachRight
// Первый аргумент - массив, второй - функция, применяется на массив в обратном порядке

function forEachRight<T>(arr: T[], cb: (val: T) => void): void {
    arr.reverse().forEach(cb);
}

forEachRight<number>([1, 2, 3, 4], val => console.log(val))
