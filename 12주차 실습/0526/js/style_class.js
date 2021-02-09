document.addEventListener('DOMContentLoaded', function() {
    let elem = document.getElementById('elem');

    elem.addEventListener('mouseover', function() {
        this. className = 'highlight';
    });

    elem.addEventListener('mouseout', function() {
        this.className = '';
    });
});