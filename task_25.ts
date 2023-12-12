// Написать функцию, которая будет возвращать количество отдельных нечувствительных к регистру буквенных символов
// и числовых цифр, которые встречаются во входной строке более одного раза.
// Предполагается, что входная строка содержит только буквы (как в верхнем, так и в нижнем регистре) и цифры

// По тупому сделал)

function unReg(str: string): number {
    return str.toLowerCase()
        .split('')
        .reduce(
            (acc, el, i, arr) =>
                i !== arr.lastIndexOf(el) && !acc.includes(el) ? acc.push(el) : acc
            , []).length;
}

console.log(unReg('Indivisibilities'));
