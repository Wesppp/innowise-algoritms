// не сделано

const factory = (xValue: number, yValue: number, funcSumName: () => number) => {
    return {
        x: xValue,
        y: yValue,
        myFunc: funcSumName,
    }
}
const obj = factory(12, 23, function sum() {
    return this.x + this.y;
});

console.log(obj.x, obj.y, obj.myFunc()); // 12, 23, 35
