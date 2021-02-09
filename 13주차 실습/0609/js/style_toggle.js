// document.addEventListener('DOMContentLoaded', function() {
//     let elem = document.getElementById('elem');

//     elem.addEventListener('click', function() {
//         if(this.className === 'highlight') {
//             this.className = '';
//         }else {
//             this.className = 'highlight';
//         }
        
//         // this.className = (this.className === 'highlight' ? '' : 'highlight');
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