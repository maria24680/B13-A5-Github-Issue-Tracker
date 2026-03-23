1️⃣ What is the difference between var, let, and const?

Ans- Difference between var,let,const
var: Function scoped. It can be redeclared and reassigned.
let: Block scoped. It can be reassigned but cannot be redeclared.
const: Block scoped. It cannot be reassigned or redeclared.
Example:
var a = 10;
let b = 20;
const c = 30;

2️⃣ What is the spread operator (...)?

Ans- Spread Operator(...):
The spread operator (...) expands elements of an array or object and is used to copy arrays,merge arrays, or pass multiple values.
Example:
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5];

console.log(arr2);

Output:[1,2,3,4,5]

3️⃣ What is the difference between map(), filter(), and forEach()?

Ans- Difference between map(),filter(), and forEach()
map(): Changes each element and returns a new array.
filter(): Selects elements based on a condition and returns a new array.
forEach(): Loops through elements but returns nothing.
Example:
let numbers = [1,2,3,4];
let mapResult numbers.map(n => n*2);
let filterResult = numbers.filter(n => n>2);
numbers.forEach(n => console.log(n));

4️⃣ What is an arrow function?

Ans- Arrow Function:
An arrow function is a shorter syntax for writing functions in JavaScript using the => symbol.
Example:
const add = (a,b) => a+b;

5️⃣ What are template literals?

Ans- Template Literals:
Template literals use backticks () and allow embedding variables inside a string using ${}.
Example:
let name = "Maria";
let message = `Hello ${name}`;
console.log(message);
Output:
Hello Maria


