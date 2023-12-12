// Каррирование

function add(n: number) {
    function innerAdd(nextValue: number) {
        return add(n + nextValue);
    }

    innerAdd.valueOf = function() {
        return n;
    };

    return innerAdd;
}

add(1)(2)(3);
