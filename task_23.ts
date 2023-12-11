// Вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ.
// Если длина слова четная, вернуть 2 средних символа

function getMiddle(str: string): string {
    const middle: number = Math.floor(str.length / 2);

    return str.length % 2 === 0 ? `${str[middle - 1]}${str[middle]}` : `${str[middle]}`;
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
