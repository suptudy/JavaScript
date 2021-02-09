// document.addEventListener('DOMContentLoaded', function() {
//     let elem = document.getElementById('elem');

//     elem.addEventListener('mouseover', function() {
//         this.style.backgroundColor = 'Yellow';
//     });

//     elem.addEventListener('mouseout', function() {
//         this.style.backgroundColor = '';
//     });
// });

$(document).ready(function() {
    $('#elem').on('mouseover',function() {
        $(this).css('background-color', 'yellow');
    });

    $('#elem').on('mouseout', function() {
        $(this).css('background-color', 'white');
    });
});