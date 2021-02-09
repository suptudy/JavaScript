document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let name = document.getElementById('name');
        let url = document.getElementById('url');

        let list = document.getElementById('list');
        list.innerHTML = '<a href="' + url.value + '">' + name.value + "</a><br>";
    })
});