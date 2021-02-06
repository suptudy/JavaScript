function checkCheckbox() {
    const list = document.getElementsByName("check");

//     for(let index=0, len=list.length; index < len; index++) {
//         if(list[index].checked === true) {
//             console.log(list[index].value + "(체크)");
//         }
//     }

for (let item of list) {
    if(item.checked === true) {
        console.log(item.value + "(체크)");
        }
    }
}