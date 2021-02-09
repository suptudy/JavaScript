// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('my-form').addEventListener('submit', function(e) {
//         e.preventDefault();
//         let name = document.getElementById('name');
//         let result = document.getElementById('result');
//         if(name.value.trim() === "") {  //"value"
//             result.textContent = "이름을 입력하세요";
//         } else {
//             window.alert("입력 데이터: " + name.value);
//             e.currentTarget.submit();
//         }
//     });
// })

$(document).ready(function() {
    $('my-form').on('submit', function(e) {
        e.preventDefault();

        if($('#name').val().trim() === '') {
            $('#result').text('이름을 입력하세요');
        } else {
            window.alert("입력 데이터: " + $('#name').val());
            e.currentTarget.submit();
        }
    });
});