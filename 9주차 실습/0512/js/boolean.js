console.log(true.toString());

let b = false;
console.log(b.toString());

let x = Boolean(0);
console.log(x.valueOf());
if (x.valueOf()) {
    console.log("실행 됨");
}

x = false;
if (x) {
    console.log("실행 안됨");
}