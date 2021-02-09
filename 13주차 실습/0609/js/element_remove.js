// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('change-btn').addEventListener('click', function() {
//         let myList = document.getElementById('my-list');
//         let item = myList.firstElementChild;
//         myList.removeChild(item);
//     })
// });

$(document).ready(function() {
    $('#change-btn').on('click', function() {
        let $item = $('#my-list').children('li:first');
        $item.remove();
    });
});