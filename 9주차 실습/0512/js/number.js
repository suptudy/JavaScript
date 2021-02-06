console.log(2.0 === 2);
console.log((2).toString());
console.log((3.14).toString());

let num1 = 255;
console.log(num1.toString());
console.log(num1.toString(16));
console.log(num1.toString(8));

let num2 = 123.45678;
console.log(num2.toExponential(2));
console.log(num2.toFixed(3));
console.log(num2.toFixed(7));
console.log(num2.toPrecision(10));
console.log(num2.toPrecision(6));


let n = '123xxx';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));


let h = '0x10';
console.log(Number(h));
console.log(Number.parseFloat(h));
console.log(Number.parseInt(h));
