// Реализовать функцию forEachRight
// Первый аргумент - массив, второй - функция, применяется на массив в обратном порядке

function forEachRight(arr: number[], cb: (val: any) => void): void {
    arr.reverse().forEach(cb);
}

forEachRight([1, 2, 3, 4], val => console.log(val))
