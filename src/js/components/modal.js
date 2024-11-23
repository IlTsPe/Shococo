import { debounce } from "./debounce";

const btn = document.querySelector('.product__btn');
const body = document.querySelector('body');
// const showButton = document.querySelectorAl('#')


/* --------Функции для вызова------- */
const generateCartProduct = () => {
	return `
	<div class="modal modal--hidden" data-overlay>
	<div class="modal__container">
		<div class="modal__header">
			<h3 class="modal__title">РумТибет</h3>
			<span class="modal__action">Вход в личный кабинет</span>
		</div>
		<form class="modal__form">
			<input type="email" class="modal__email" placeholder="Email">
			<div class="modal__password">
				<input type="password" id="password" placeholder="Password">
				<button class="show-hide-password">
					<svg data-status="hide">
						<use xlink:href="#hide"></use>
					</svg>
					<svg class="hide-password" data-status="view">
						<use xlink:href="#view"></use>
					</svg>
				</button>
			</div>
			<div class="modal__help mb-40">
				<div class="modal__remember">
					<label class="checkbox">
						<input type="checkbox">
						<div class="checkbox-castom"></div>
						Запомнить меня
					</label>
				</div>
				<div class="modal__forgot">
					<a href="404.html">Забыл пароль?</a>
				</div>
			</div>
			<button
				class="modal__btn btn btn--white-bg btn--green-text btn--bold">Войти</button>
			<button class="close modal__close">
				<span class="close-line"></span>
				<span class="close-line"></span>
			</button>
		</form>
	</div>
	</div>`;
}

const closeModal = function () {
	modal.classList.add('modal--hidden');
	body.classList.remove('body--modal');
};

const openModal = function () {
	body.insertAdjacentHTML('afterbegin', generateCartProduct())
	body.classList.add('body--modal');
};

btn.addEventListener('click', openModal);


