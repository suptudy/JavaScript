// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('file').addEventListener('change', function() {
//         let file = document.getElementById('file').files[0];
//         let reader = new FileReader();
//         reader.addEventListener('load', function() {
//             document.getElementById('result').textContent = reader.result;
//         });

//         reader.addEventListener('error', function() {
//             console.log(reader.error.message);
//         });

//         reader.readAsText(file, 'UTF-8');
//     })
// })

$(document).ready(function() {
    $('#file').on('change', function() {
        let file = $('#file')[0].files[0];
        let reader = new FileReader();
        
        $(reader).on('load', function() {
            $('#result').text(reader.result);
        });

        $(reader).on('error', function() {
            console.log(reader.error.message);
        });

        reader.readAsText(file, 'UTF-8');
    });
});