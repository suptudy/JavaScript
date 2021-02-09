// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn').addEventListener('click', function() {
//         let result = document.getElementById("result");
//         let foods = document.getElementsByName("food");

//         for(let food of foods) {
//             if(food.checked) {
//                 result.textContent = food.value;
//                 break;
//             }
//         }
//     })
// })

$(document).ready(function() {
    $('#btn').click(function() {
        let $selected = $('input[name="food"]:checked');
        $('#result').text($selected.val());
    });
});