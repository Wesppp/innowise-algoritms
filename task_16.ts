// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку,
// но с перевернутыми словами из X и более букв (X — второй параметр ф-ии)..
// Переданные строки будут состоять только из букв и пробелов

function spinWords(str: string, num: number): string {
    return str.split(' ').reduce(
        (acc, word) => word.length >= num ?
            acc += word.split('').reverse().join('') + ' ' :
            acc += word + ' '
        , ''
    )
}

console.log(spinWords( "Hey fellow warriors", 5 ));
console.log(spinWords( "This is a test", 10));
console.log(spinWords( "This is another test", 3 ));
