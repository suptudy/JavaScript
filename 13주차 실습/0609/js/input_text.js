// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn').addEventListener('click', function() {
//         let name = document.getElementById('name');
//         let result = document.getElementById('result');
//         if(name.value.trim() === "") { 
//             result.textContent = "이름을 입력하세요";
//         } else {
//             result.textContent = "입력 데이터: " + name.value;
//         }
//     })
// })  //JavaScript

$(document).ready(function() {
    $('#btn').on('click', function() {
        if($('#name').val().trim() === "") {
            $('#result').text('이름을 입력하세요.');
        } else {
            $('#result').text('입력 데이터 : ' + $('#name').val());
        }
    });
});