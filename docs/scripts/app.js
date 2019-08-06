let siteHeader = document.querySelector('.site-header');

let goTopButton = document.querySelector('.go-top');
goTopButton.addEventListener('click', goTop);

window.addEventListener('scroll', showButtonAndStickyNav);

let allQuestionsElements = document.querySelectorAll('.questions-wrapper');

allQuestionsElements.forEach(questionWrapper => questionWrapper.addEventListener('click', showOrHideAnswer));

function goTop() {
    document.body.pageYOffset = 0;
}

function showButtonAndStickyNav() {
    if (window.pageYOffset > 0) {
        goTopButton.style.opacity = 1;
        siteHeader.classList.add('fixed');
    } else {
        goTopButton.style.opacity = 0;
        siteHeader.classList.remove('fixed');
    }
}

function showOrHideAnswer() {
    let questionWrapper = event.target;

    if(questionWrapper.classList.contains('active')) {
        questionWrapper.classList.remove('active');
    } else {
        questionWrapper.classList.add('active');
    }
}