// Создать функцию с именем divisors / Divisors,
// которая принимает целое число n> 1 и возвращает массив со всеми делителями целого числа (кроме 1 и самого числа),
// от наименьшего до наибольшего. Если число простое, вернуть строку '(integer) is prime'

function divisors(num: number): number[] | string {
    const result: number[] = [];

    for(let i = 2; i < num; i++) {
        if (num % i === 0) { result.push(i); }
    }

    return result.length ? result : `${num} is prime`;
}

console.log(divisors(13));
console.log(divisors(12));
