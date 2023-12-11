function camelize(str: string): any {
    return str.split('-').reduce((acc, el) => acc += el[0].toUpperCase() + el.slice(1))
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
