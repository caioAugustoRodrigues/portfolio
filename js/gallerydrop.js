const trigger = document.querySelector('.items__title');
const canvas = document.querySelector('.items__canvas');
const arrow = document.querySelector('.arrow');
let isShown = false;

function collapse() {
    if (!isShown) {
        canvas.classList.add('active');
        arrow.innerHTML = '<i class="fas fa-chevron-up"></i>';
        isShown = true;
    } else {
        canvas.classList.remove('active');
        arrow.innerHTML = '<i class="fas fa-chevron-down"></i>';
        isShown = false;
    }
}

trigger.addEventListener('click', collapse);
