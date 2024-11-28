import { contactForm } from './contact-form';
import { formValidation } from './formValidation';
import { phoneMask } from "./phoneMask";

const productBtn = document.querySelectorAll('.product__btn');
const body = document.querySelector('body');

const generateModalForm = (name) => {
	return `
		<div class="modal">
			<div class="modal__container">
				<button class="close-btn modal__close-btn">
					<span class="close-btn__line"></span>
					<span class="close-btn__line"></span>
				</button>
				<div class="modal__header">
					<h3 class="modal__title">Выберите параметры заказа</h3>
				</div>
				<form class="modal__form" action="tg.php" method="post">
					<input type="text" hidden value="${name}" name="${name}" id="fountain">
					<select name="count" id="count">
						<option disabled hidden selected value="0">Укажите кол-во человек&#42;</option>
					${name === 'Маленький фонтан' ?
			`<option value="до 20 человек">До 20 человек</option>
						<option value="20 человек">20 человек</option>
						<option value="30 человек">30 человек</option>
						<option value="40 человек">40 человек</option>
					</select>` : name === 'Средний фонтан' ?
				`<option value="50 человек">50 человек</option>
						<option value="60 человек">60 человек</option>
						<option value="70 человек">70 человек</option>
					</select>` : name === 'Большой фонтан' ?
					`<option value="80 человек">80 человек</option>
						<option value="90 человек">90 человек</option>
						<option value="100 человек">100 человек</option>
						<option value="110 человек">110 человек</option>
						<option value="120 человек">120 человек</option>
					</select>` : name === 'Сахарная вата' ?
						`<option value="от 50 порций">от 50 порций - 8.000</option>
					<option value="1000 порций">1000 порций - 12.000</option>
					</select>` : false}
					<div class="modal__input-field">
						<input type="text" id="name" name="name" placeholder="Введите ваше ФИО&#42;" request/>
						<span class="popup popup-name">Имя должно содержать только буквы русского алфавита</span>
					</div>
					<div class="modal__input-field">
						<input type="tel" id="phone" name="phone" placeholder="Укажите номер телефона&#42;" request/>
						<span class="popup popup-phone">Неполный номер телефона</span>
					</div>
					<input type="email" id="email" name="email" placeholder="Укажите почту" />
					<button type="submit" class="product__btn order-btn modal__btn disabled-button" disabled=true>Отправить заявку</button>
				</form>
			</div>
		</div>
	`;
};

const openModal = function (name) {
	body.insertAdjacentHTML('afterbegin', generateModalForm(name))
	body.classList.add('body--modal');
};

productBtn.forEach(btn => {
	btn.addEventListener('click', (e) => {
		const fountainSize = e.target.getAttribute('data-name');
		openModal(fountainSize);
		const modal = document.querySelector('.modal');
		// const sendBtn = modal.querySelector('.product__btn');
		if (modal) {
			const closeBtn = modal.querySelector('.close-btn');
			closeBtn.classList.add('close-btn--active')
			phoneMask();
			formValidation();
			contactForm();

			const closeModal = function () {
				modal.remove();
				body.classList.remove('body--modal');
			};
			body.addEventListener('click', (e) => {
				e.target.classList.contains('modal') ? closeModal() : false
			});
			closeBtn.addEventListener('click', closeModal);
			// sendBtn.addEventListener('click', closeModal);
		};
	});
});