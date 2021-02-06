let m = new Map();

m.set('dog', '멍멍멍');
m.set('cat', '야옹야옹');
m.set('mouse', '찍찍');

function printItem(value, key, mapObj) {
    console.log(key, value);
}

m.forEach(printItem);

// console.log(m);
// console.log("m.size", m.size);
// console.log("m.get('dog')", m.get('dog'));
// console.log("m.has('cat')", m.has('cat'));

// for(let key of m.keys()) {
//     console.log(key);
// }

// for(let value of m.values()) {
//     console.log(value);
// }

// for(let [key, value] of m) {
//     console.log(key, value);
// }

// m.delete('dog');
// console.log(m.size);

// m.clear();
// console.log(m.size);