// document.addEventListener('DOMContentLoaded', function() {
//     let elem = document.getElementById('elem');

//     elem.addEventListener('mouseover', function() {
//         this. className = 'highlight';
//     });

//     elem.addEventListener('mouseout', function() {
//         this.className = '';
//     });
// });

$(document).ready(function() {
    $('#elem').on('mouseover', function() {
        $(this).addClass('highlight');
    });

    // $('#elem').on('mouseout', function() {
    //     $(this).removeClass('highlight');
    // });
});