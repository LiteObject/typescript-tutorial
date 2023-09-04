"use strict";
console.log("Hello World!");
function canWithdraw(value) {
    if (value < 0) {
        console.log("Insufficient fund");
        return 0;
    }
    else {
        return 1;
    }
}
let amount = 25;
let res = canWithdraw(amount);
console.log("Can Withdraw? " + (res == 1 ? "Yes" : "No"));
let employee = {
    id: 1,
    name: "John",
    doSomething: (something) => console.log(something)
};
console.log("Employee: " + employee.name);
employee.doSomething("Working...");
function convertKgToLb(weight) {
    let c = 2.20462;
    if (typeof weight === "number") {
        return weight * c;
    }
    else {
        return parseInt(weight) * c;
    }
}
let weight = 75;
console.log(`${weight} kg is equal to ${convertKgToLb(weight)} lb.`);
let acct = {
    put: (value) => console.log(`Added ${value}`),
    take: (value) => console.log(`Took ${value}`)
};
console.log(acct.put(100));
let quantity = 100;
console.log(`Quantity ${quantity}`);
let met = 'cm';
console.log(met);
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 123));
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString());
const wrappedValue = { value: 10 };
console.log(`The wrapped value is ${wrappedValue.value}`);
//# sourceMappingURL=index.js.map