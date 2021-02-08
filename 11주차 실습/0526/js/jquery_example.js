// 자바스크립트로 쓴 경우
// document.querySelector('#hello-btn').addEventListener('click', function() {
//     window.alert("Hello jQuery");
// });

//jQuery 문법으로 쓴 경우
// jQuery('#hello-btn').click(function() {
//     window.alert("Hello jQuery");
// });

// $('#hello-btn').click(function() {
//     window.alert("Hello jQuery");
// });

$(document).ready(function() {
    $('#hello-btn').click(function() {
        window.alert("Hello Latest jQuery");
    });
});