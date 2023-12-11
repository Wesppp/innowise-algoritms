// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(arr: any[]): number[] {
    return arr.filter(el => typeof el !== 'string');
}

console.log(filter_list([1,2,'a','b']));
