// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('change-btn').addEventListener('click', function() {
//         let myList = document.getElementById('my-list');
//         let item = myList.firstElementChild;
//         let liNode = document.createElement('li');
//         liNode.textContent = 'Water';
//         myList.replaceChild(liNode, item);
//     })
// });

$(document).ready(function() {
    $('#change-btn').on('click', function() {
        let $item = $('#my-list').children('li:first');
        let liNode = '<li>Water</li>';
        $item.replaceWith(liNode);
    })
});