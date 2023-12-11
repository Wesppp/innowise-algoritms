// Написать функцию persistence, которая принимает положительный параметр num и возвращает
// число, которое нужно умножить цифры в num, пока не дойдете до единственной цифры

function persistence(num: number): number {
    let count: number = 0;

    while(String(num).length !== 1) {
        num = +String(num).split('').reduce((acc, el) => acc *= +el, 1);

        count++;
    }

    return count;
}

console.log(persistence(999));
