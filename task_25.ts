// Написать функцию, которая будет возвращать количество отдельных нечувствительных к регистру буквенных символов
// и числовых цифр, которые встречаются во входной строке более одного раза.
// Предполагается, что входная строка содержит только буквы (как в верхнем, так и в нижнем регистре) и цифры

// По тупому сделал)

function unReg(str: string): number {
    const exceptions: string[] = [];

    return str.toLowerCase()
        .split('')
        .reduce(
            (acc, el, i, arr) => {
                if(i !== arr.lastIndexOf(el) && !exceptions.includes(el)) {
                    exceptions.push(el);

                    return acc += 1;
                }

                return acc
            }, 0);
}

console.log(unReg('Indivisibilities'));
