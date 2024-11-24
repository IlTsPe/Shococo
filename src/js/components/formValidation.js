import { debounce } from './debounce';

export const formValidation = () => {

	const nameInput = document.querySelector('#name');
	const phoneInput = document.querySelector('#phone');
	const namePopup = document.querySelector('.popup-name');
	const phonePopup = document.querySelector('.popup-phone');

	/*--- Добавление классов на input ---*/
	function addInvalidActive(input, popup) {
		input.classList.add('modal__input-field--invalid');
		popup.classList.add('popup--active');
		setInterval(() => {
			popup.classList.remove('popup--active');
		}, 2500);
	};

	function removeInvalidActive(input) {
		input.classList.remove('modal__input-field--invalid');
	};

	/*--- Валидация имени ---*/
	function nameValidation() {
		const nameRegEx = /[^а-я\s]+/gi;
		const validName = nameInput.value.replace(nameRegEx, "?");
		const checkName = validName.indexOf('?') > -1;
		checkName || nameInput.value == '' ? addInvalidActive(nameInput, namePopup) : removeInvalidActive(nameInput);
	};

	nameInput.addEventListener('change', () => {
		nameValidation();
		btnValidation();
	});

	/*--- Валидация телефона ---*/
	let validPhone;

	function phoneValidation() {
		const phoneRegEx = /\W*_*/g;
		validPhone = phoneInput.value.replace(phoneRegEx, '');
		+validPhone.length === 11 ? removeInvalidActive(phoneInput) : addInvalidActive(phoneInput, phonePopup);
		if (phoneInput.value === '') {
			removeInvalidActive(phoneInput);
			phonePopup.classList.remove('popup--active');
		}
		return validPhone;
	};

	phoneInput.addEventListener('change', () => {
		phoneValidation();
		btnValidation();
	});

	/*--- Валидация количества ---*/
	const countSelect = document.querySelector('#count');
	let validOption = true;
	function countValidation() {
		validOption = false;
		if (+countSelect.value === 0) {
			validOption = true;
		};
		return validOption;
	}

	countSelect.addEventListener('change', () => {
		countValidation();
		btnValidation();
	});

	/*--- Валидация кнопки отправки ---*/
	function btnValidation() {
		const inputs = document.querySelectorAll('.modal__input-field');
		const formBtn = document.querySelector('.modal__btn');
		const inputsStatusArr = [];

		inputs.forEach(input => {
			const status = input.querySelector('input').classList.contains('modal__input-field--invalid');
			inputsStatusArr.push(status);
			return inputsStatusArr;
		});

		if (inputsStatusArr.includes(true) || nameInput.value === '' || validPhone === undefined || validOption) {
			formBtn.classList.add('disabled-button');
			formBtn.setAttribute('disabled', true);
		} else {
			formBtn.classList.remove('disabled-button');
			formBtn.removeAttribute('disabled')
		};
	};
}