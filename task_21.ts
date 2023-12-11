// Дана строка. Вернуть длину самого короткого слова

function getLengthOfShortestWord(str: string): number {
    return str.replace(/[,.]/g, '')
        .split(' ')
        .reduce((acc, word) => word.length < acc ? word.length : acc, str.length);
}

console.log(getLengthOfShortestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'));
