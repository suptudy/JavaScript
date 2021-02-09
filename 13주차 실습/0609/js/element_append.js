// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn').addEventListener('click', function() {
//         let name = document.getElementById('name');
//         let url = document.getElementById('url');

//         let anchor =document.createElement('a');
//         anchor.href = url.nodeValue;

//         let text = document.createTextNode(name.value);
//         anchor.appendChild(text);

//         let br = document.createElement('br');

//         let list = document.getElementById('list');
//         list.appendChild(anchor);
//         list.appendChild(br);
//     })
// })

$(document).ready(function() {
$('#btn').on('click', function() {
    let nameVal = $('#name').val();
    let urlVal = $('#url').val();
    //let $anchor = $('<a href="' + $urlVal + '">' + $nameVal + '</a>');
    //let $br = $('<br>'); //아래와 같음
    //let elem = '<a href="' + urlVal + '">' + nameVal + '</a><br>'; //아래와 같음
    let elem = `<a href="${urlVal}">${nameVal}</a><br>`;

    // $('#list').after($anchor);
    // $('#list').after($br);
    $('#list').prepend(elem);
    });
});