document.addEventListener('DOMContentLoaded', function() {
    let elem = document.getElementById('elem');

    elem.addEventListener('click', function() {
        let classes = this.className.split(' ');
        let index = classes.indexOf('highlight');

        if(index === -1) {
            classes.push('highlight');
        } else {
            classes.splice(index, 1);
        }
        this.className = classes.join(' ');
    });
});