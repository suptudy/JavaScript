// document.addEventListener('DOMContentLoaded', function() {
//     let elem = document.getElementById('elem');

//     elem.addEventListener('click', function() {
//         let classes = this.className.split(' ');
//         let index = classes.indexOf('highlight');

//         if(index === -1) {
//             classes.push('highlight');
//         } else {
//             classes.splice(index, 1);
//         }
//         this.className = classes.join(' ');
//     });
// });

$(document).ready(function() {
    $('#elem').on('click', function() {
        if($(this).hasClass('highlight')) {
            $(this).removeClass('highlight');
        } else {
            $(this).addClass('highlight');
        }
    });
});

// $(document).ready(function() {
//     $('#elem').on('click', function() {
//         $(this).toggleClass('highlight');
//     });
// });