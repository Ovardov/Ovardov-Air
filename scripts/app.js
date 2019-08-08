let siteHeader = document.querySelector('.site-header');

let goTopButton = document.querySelector('.go-top');
goTopButton.addEventListener('click', goTop);

window.addEventListener('scroll', showButtonAndStickyNav);

let allQuestionsAndAnswers = document.querySelectorAll('.question-and-answer');

allQuestionsAndAnswers.forEach(questionAndAnswer => questionAndAnswer.addEventListener('click', showOrHideAnswer));

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
    let questionAndAnswer = event.target;

    if(questionAndAnswer.classList.contains('active')) {
        questionAndAnswer.classList.remove('active');
    } else {
        questionAndAnswer.classList.add('active');
    }
}