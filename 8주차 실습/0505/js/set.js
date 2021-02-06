let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);
s.add(5);

console.log(s);
console.log(s.has(100));
console.log(s.size);

// for(let value of s) {
//     console.log(value);
// }

// s.delete(100);
// console.log(s.size);

// s.clear();
// console.log(s.size);
