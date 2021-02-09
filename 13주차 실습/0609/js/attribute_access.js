// let gwnuURL = document.getElementById("gwnu-url");
// let btn = document.getElementById("change-url-btn");
// console.log(gwnuURL.href);
// //console.log(gwnuURL.class);
// console.log(gwnuURL.getAttribute("class"));

// btn.addEventListener("click", function() {
//     //gwnuURL.href = "http://www.gwnu.ac.kr";
//     gwnuURL.setAttribute("href", "http://www.gwnu.ac.kr");
// }); //이것을 jqery로 밑에 바꿈

$(document).ready(function() {
    let gwnuURL = $('#gwnu-url');
    let btn = $('#change-url-btn');

    console.log(gwnuURL.attr('href'));
    console.log(gwnuURL.attr('class'));

    btn.on('click', function() {
        gwnuURL.attr('href', 'http://www.gwnu.ac.kr');
    });
});