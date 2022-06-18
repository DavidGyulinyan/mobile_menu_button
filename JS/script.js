
// toggl
const burgerMenu = document.querySelector('.burger');

const menuIsActive = () => {
    burgerMenu.classList.toggle('active');
};

burgerMenu.addEventListener('click', menuIsActive);