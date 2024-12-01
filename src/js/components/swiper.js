import Swiper from 'swiper';
import { Navigation } from 'swiper';

const swiper = new Swiper('.swiper', {
	modules: [Navigation],
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	centeredSlides: true,
	grabCursor: true,
	speed: 600,
	lazyPreloadPrevNext: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 3
		},
		758: {
			slidesPerView: 2
		},
		320: {
			slidesPerView: 1
		}
	}
});