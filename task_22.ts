// Написать ф-ию, которая принимает 3 целочисленных значения a, b, c.
// Ф-ия должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае

function isTriangle(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
