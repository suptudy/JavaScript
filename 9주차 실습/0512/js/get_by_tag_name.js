const list = document.getElementsByTagName("a");

// for(let index=0, len=list.length; index<len; index++) {
//     console.log(list[index].href);
// }

for(let item of list) {
    console.log(item.href);
}