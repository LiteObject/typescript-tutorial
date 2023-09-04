console.log("Hello World!");

const enum Result { No = 0, Yes = 1 }

function canWithdraw(value: number): Result {
    if (value < 0) {
        console.log("Insufficient fund");
        return Result.No;
    }
    else {
        return Result.Yes;
    }
}

let amount: number = 25;
let res: Result = canWithdraw(amount)
console.log("Can Withdraw? " + (res == 1 ? "Yes" : "No"));

/*******************************************************************/

type Employee = {
    readonly id: number;
    name: string;
    doSomething: (something: string) => void;
}

let employee: Employee = {
    id: 1,
    name: "John",
    doSomething: (something: string) => console.log(something)
}

console.log("Employee: " + employee.name)
employee.doSomething("Working...")

/*******************************************************************/

function convertKgToLb(weight: number | string) {

    // LB = KG * 2.20462
    let c = 2.20462;

    // Narrowing
    if (typeof weight === "number") {
        return weight * c;
    }
    else {
        return parseInt(weight) * c;
    }
}

let weight = 75;
console.log(`${weight} kg is equal to ${convertKgToLb(weight)} lb.`);

/*******************************************************************/

type Deposit = {
    put: (value: number) => void;
}

type Withdraw = {
    take: (value: number) => void;
}

type Account = Deposit & Withdraw;

let acct: Account = {
    put: (value: number) => console.log(`Added ${value}`),
    take: (value: number) => console.log(`Took ${value}`)
}

console.log(acct.put(100));

/*******************************************************************/
type Quantity = 1 | 100;

// let quantity: 1 | 100 = 100;
let quantity: Quantity = 100;
console.log(`Quantity ${quantity}`);

type Metric = 'cm' | 'inch';
let met: Metric = 'cm';
console.log(met);

/*******************************************************************
 * Basic Generics
 *******************************************************************/
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

console.log(createPair<string, number>('hello', 123)); // ['hello', 42]

class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10

type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };
console.log(`The wrapped value is ${wrappedValue.value}`);

/*******************************************************************/