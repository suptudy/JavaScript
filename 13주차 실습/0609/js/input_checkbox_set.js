// document.addEventListener('DOMContentLoaded', function() {
//     let setCheckValue = function(name, values) {
//         let foods = document.getElementsByName(name);

//         for (let food of foods) {
//             if(values.indexOf(food.value) > -1) {
//                 food.checked = true;
//             }
//         }
//     };

//     setCheckValue('food', ['만두','불고기']);
// })

$(document).ready(function() {
    let setCheckValue = function(name, values) {
        let $items = $('[name="' + name + '"]'); //$('[name="food"]');
        console.log($items);
        // for(let index=0; index<$items.length; index++) {
        //     if(values.indexOf($items[index].value) > -1) {
        //         $items[index].checked = true;
        //     }
        // }
        // $items.each(function(index, item) {
        //     if(values.indexOf($(item).val()) > -1) {
        //     $($items[index]).prop('checked', true);
        //     }
        // });
        // $items.each(function(index, item) {
        //     if(values.indexOf($(item).val()) > -1) {
        //         $(item).prop('checked', true);
        //     }
        // }); 
    }

    setCheckValue('food', ['라면', '불고기']);
});