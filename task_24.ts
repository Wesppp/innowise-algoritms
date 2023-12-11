// Дан массив чисел.
// Необходимо отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях

function sort(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i++)
        for(let j = i + 1; j < arr.length - 1; j++) {
            if(arr[i] > arr[j] && arr[i] % 2 !== 0 && arr[j] % 2 !== 0) {
                let temp  = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    return arr;
}

console.log(sort([5, 8, 6, 3, 4]));
