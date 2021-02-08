document.addEventListener('DOMContentLoaded', function() {
    let elem = document.getElementById('elem');
    
    elem.addEventListener('click', function() {
        // this.classList.toggle('highlight');
        if(this.classList.contains('highlight')) {
            this.classList.remove('highlight');
            this.classList.remove('bstyle');
        } else {
            this.classList.add('highlight');
            this.classList.add('bstyle');
        }
    });
});