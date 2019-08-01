let site = document.querySelector('.site');
let profile = document.querySelector('.profile');

let userButton = document.querySelector('.user-button');
userButton.addEventListener('click', showForms);

let closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', hideForms);

let logInButton = document.querySelector('.log-in-button');
logInButton.addEventListener('click', showLogInForm);

let signUpButton = document.querySelector('.sign-up-button');
signUpButton.addEventListener('click', showSignUpForm);

let logInSection = document.querySelector('.log-in');
let signUpSection = document.querySelector('.sign-up');

function showForms() {
    userButton.classList.add('clicked');
    profile.style.display = 'block';
    site.classList.add('black-background');
}

function hideForms() {
    userButton.classList.remove('clicked');
    profile.style.display = 'none';
    site.classList.remove('black-background');
}

function showSignUpForm() {
    signUpButton.classList.add('clicked');
    logInButton.classList.remove('clicked');

    logInSection.style.display = 'none';
    signUpSection.style.display = 'block';
}

function showLogInForm() {
    logInButton.classList.add('clicked');
    signUpButton.classList.remove('clicked');

    signUpSection.style.display = 'none';
    logInSection.style.display = 'block';
}