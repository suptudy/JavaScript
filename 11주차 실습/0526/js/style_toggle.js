document.addEventListener('DOMContentLoaded', function() {
    let elem = document.getElementById('elem');

    elem.addEventListener('click', function() {
        if(this.className === 'highlight') {
            this.className = '';
        }else {
            this.className = 'highlight';
        }
        
        // this.className = (this.className === 'highlight' ? '' : 'highlight');
    });
});