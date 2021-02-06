let data = [2, 3, 4, 5];
let result = [];


// for(let item of data) {
//     console.log(item * item);
// }

// function printSquare(item, array, index) {
//     console.log(array, index, item * item);
// }

// data.forEach(printSquare);


// function square(item) {
//     return item * item;
// }

// result = data.map(square);
// console.log(result);


// function checkOdd(item) {
//     return item % 2 === 1;
// }

// result = data.filter(checkOdd);
// console.log(result);

let data2 = [5, 25, 10];
//data2.sort();
console.log(data2);

function compare(x, y) {
    if (x > y) {
        return 1;
    }else if (x == y) {
        return 0;
    }else {
        return -1;
    }
}

data2.sort(compare);
console.log(data2);





// let classes = ['부장', '과장', '주임', '담당'];
// let members = [
//     {name: '남상미', clazz: '주임'},
//     {name: '김준수', clazz: '부장'},
//     {name: '장인식', clazz: '담당'},
//     {name: '남궁민', clazz: '과장'},
//     {name: '이상수', clazz: '담당'},
// ];

// function compareClass(x, y) {
//     if(classes.indexOf(x.clazz) > classes.indexOf(y.clazz)) {
//         return 1;
//     }else if (classes.indexOf(x.clazz) === classes.indexOf(y.clazz)) {
//         return 0;
//     }else {
//         return -1;
//     }
// }

// members.sort(compareClass);
// console.log(members);





// let data3 = [4, 9, 16, 25];
// function checkMultiple3(item) {
//     return item % 3 === 0;
// }

// let resultMultiple3 = data3.some(checkMultiple3);
// if(resultMultiple3) {
//     console.log('3의 배수가 발견되었습니다.');
// }else {
//     console.log('3의 배수가 없습니다.');
// }

// resultMultiple3 = data3.every(checkMultiple3);
// if(resultMultiple3) {
//     console.log('모두 3의 배수입니다.');
// } else {
//     console.log('3의 배수가 아닌 것이 있습니다.');
// }