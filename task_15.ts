// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n

function sumTo(n: number): number {
    let sum: number = 0;

    for(let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumTo(5));
