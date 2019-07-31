let goTopButton = document.querySelector('.go-top');

goTopButton.addEventListener('click', goTop);
window.addEventListener('scroll', showButton);

function goTop() {
    document.body.window.pageYOffset = 0;
}

function showButton() {
    if (window.pageYOffset > 0) {
        goTopButton.style.opacity = 1;
    } else {
        goTopButton.style.opacity = 0;
    }
}