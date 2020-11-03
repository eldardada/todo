// import 'core-js/features/promise';

window.addEventListener('load', function() {
    const listsWithNested = document.querySelectorAll('[data-nested]')

    function toggleActiveClass(el) {
        el.classList.toggle('active');
    }

    function swipeMenu() {
        if(window.innerWidth <= 768) {

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
    }

    swipeMenu();

    listsWithNested.forEach(list => {
        list.addEventListener('click', e => {
            const target = e.target;

            if(target.tagName == 'LI') {
                const title = list.querySelector('[data-title]');
                if(title.tagName == 'INPUT') {
                    title.value = target.textContent;
                }
                else {
                    title.innerHTML = target.textContent;
                }
            }

            if(list.hasAttribute('data-nested')) {
                toggleActiveClass(list);
            }
            
            
        })
    });

    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        modal.addEventListener('click', e => {
            const target = e.target;

            if(target.classList.contains('modal__close')) {
                toggleActiveClass(modal);
            }

        });

        modal.addEventListener('submit', e => {
            e.preventDefault();
            const validateEls = modal.querySelectorAll('[data-validate]');


            validateEls.forEach(el => {
                let inputBlock = el.closest('.input');
                let error = false;
                
                if(el.value === '') {
                    inputBlock.classList.add('error');
                    eror = true;
                }
                else {
                    if(inputBlock.classList.contains('error')) {
                        inputBlock.classList.remove('error');
                    }
                }

                if(!error) {
                    toggleActiveClass(modal);
                    setTimeout(function() {
                        alert('Thank');
                    }, 100);
                }
            });

        });
    });

    window.addEventListener('resize', swipeMenu);

    document.addEventListener('click', e => {
        const target = e.target;
        const btn = target.closest('[data-modal]');
        if(btn) {
            if(btn.dataset.modal == 'modal_add') {
                toggleActiveClass(document.querySelector('.modal_add'));
            }
            else if(btn.dataset.modal == 'modal_edit') {
                toggleActiveClass(document.querySelector('.modal_edit'));
            }
        }

        if(target.classList.contains('todo-task__title')) {
            document.querySelector('.task').style.display = 'grid';
            document.querySelector('.todo').style.display = 'none';
        }
        else if (target.closest('.task__back')){
            document.querySelector('.task').style.display = 'none';
            document.querySelector('.todo').style.display = 'block';
        }
    })
    
 
});