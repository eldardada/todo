// import 'core-js/features/promise';

window.addEventListener('load', function() {

    function toggleActiveClass(el) {
        el.classList.toggle('active');
    }

    const listsWithNested = document.querySelectorAll('[data-nested]')

    listsWithNested.forEach(list => {
        list.addEventListener('click', e => {
            const target = e.target;

            if(target.tagName == 'LI') {
                const title = list.querySelector('[data-title]');
                title.innerHTML = target.textContent;
            }

            if(list.hasAttribute('data-nested')) {
                toggleActiveClass(list);
            }
            
            
        })
    });

    if(window.innerWidth <= 720) {

        let initialPoint;
        let finalPoint;
    
        document.addEventListener('touchstart', e => {
            initialPoint = e.changedTouches[0];
        }, false);
    
        document.addEventListener('touchend', e => {
            finalPoint = e.changedTouches[0];
            let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
            let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
            if ((xAbs > 20 || yAbs > 20) && (xAbs > yAbs)) {
                toggleActiveClass(document.querySelector('.aside'));
            }
        }, false); 
    }
 
});