const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.burger-close-btn');
const header = document.querySelector('.header__left');
const navItems = document.querySelectorAll('.nav__item');

const openMenu = () => {
	header.classList.add('header__left-active')
}

const closeMenu = () => {
	header.classList.remove('header__left-active');
}

navItems.forEach(item => {
	item.addEventListener('click', closeMenu)
});

burger.addEventListener('click', openMenu);

closeBtn.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape') closeMenu();
});

const parallax = document.querySelector('#parallax');

document.addEventListener('scroll', () => {
	parallax.style.backgroundPositionY = `-${window.scrollY * 0.1}px`
})