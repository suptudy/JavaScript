// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn').addEventListener('click', function() {
//         let checkedItems = [];
//         let result = document.getElementById("result");
//         let foods = document.getElementsByName("food");

//         for(let i = 0, len = foods.length; i < len; i++) {
//             let food = foods.item(i);

//             if(food.checked) {
//                 checkedItems.push(food.value);
//             }
//         }
//         result.textContent = checkedItems.toString();
//     })
// })

$(document).ready(function() {
    $('#btn').on('click', function() {
        let checkedItems = [];
        let $result = $('#result');
        let $foods = $('[name="food"]:checked');
        
        console.log($foods);
        //for(let index=0; index<$foods.length; index++) {
            //if(($foods[index]).checked) {
            //    checkedItems.push($foods[index].value);
            //}
        //}

        // $foods.each(function(index, item) {
        //     checkedItems.push($(item).val());
        // })
        // $result.text(checkedItems.toString());
    });
});