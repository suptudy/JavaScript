// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('file').addEventListener('change', function() {
//         let files = document.getElementById('file').files;
//         for(let file of files) {
//             console.log('파일명:' + file.name);
//             console.log('종류:' + file.type);
//             console.log('사이즈:' + file.size/1024 + 'KB');
//             console.log('최종 갱신일' + file.lastModifiedDate);
//         }
//     })
// })

$(document).ready(function() {
    $('#file').on('change',function() {
        let $files = $($('#file')[0].files);
        
        $files.each(function(index, file) {
            console.log('파일명 : ' + $(file).attr('name'));
            console.log('종류 : ' + $(file).attr('type'));
            console.log('사이즈 : ' + $(file).attr('size')/1024 + 'Kb');
            console.log('최종 갱신일 : ' + $(file).attr('lastModifiedDate'));
        });
    });
});