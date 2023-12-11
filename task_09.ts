const obj = {
    id: 0,
    name: 'Obj-name',
    valueOf() {
        return this.id;
    },
    toString() {
        return this.name;
    }
};

console.log(`Name: ${obj}`);
console.log(+obj);
console.log(obj + 10);
