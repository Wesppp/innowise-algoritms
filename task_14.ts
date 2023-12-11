// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr

function unique(arr: string[]): string[] {
    return Array.from(new Set(arr));
}

let strings = ['aaa', 'aaa', 'zzz', 'xxx', 'aaa', 'bbb', 'aaa',  'xxx', 'ccc'];

console.log( unique(strings) ); // [‘aaa’, ‘zzz’, ‘xxx’, ‘bbb’, ‘ccc’]

