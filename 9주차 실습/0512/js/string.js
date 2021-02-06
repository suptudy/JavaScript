let str1 = '뜰에 뜰에 뜰에는 닭이 있다.';
console.log(str1.indexOf('뜰'));
console.log(str1.lastIndexOf('뜰'));
console.log(str1.indexOf('뜰', 3));
console.log(str1.lastIndexOf('에', 5));
console.log(str1.indexOf('가든'));
console.log(str1.startsWith('뜰'));
console.log(str1.endsWith('뜰'));
console.log(str1.includes('뜰'));

let str2 = 'Wings프로젝트';
let str3 = '    wings   ';

console.log(str2.charAt(4));

console.log(str2.slice(5, 8));
console.log(str2.substring(5, 8));
console.log(str2.substr(5, 3));

console.log(str2.split('s'));
console.log(str1.split('에', 3));

console.log(str2.concat('유한회사'));
console.log(str2.repeat(2));
console.log(str3.trim());
console.log(str2.length);