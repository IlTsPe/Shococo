

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#userPhone');
const namePopup = document.querySelector('.popup-name');
const emailPopup = document.querySelector('.popup-email');
const phonePopup = document.querySelector('.popup-phone');

let validPhone;

function addInvalidActive(input, popup) {
	input.classList.add('feedback__input--invalid');
	popup.classList.add('popup--active');
	setInterval(() => {
		popup.classList.remove('popup--active');
	}, 2500);
};

function removeInvalidActive(input) {
	input.classList.remove('feedback__input--invalid');
};

function nameValidation() {
	const nameRegEx = /[^а-я\s]+/gi;
	const validName = nameInput.value.replace(nameRegEx, "?");
	const checkName = validName.indexOf('?') > -1;
	checkName || nameInput.value == '' ? addInvalidActive(nameInput, namePopup) : removeInvalidActive(nameInput);
};

function emailValidation() {
	const emailRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
	const validEmail = emailRegEx.test(emailInput.value);
	validEmail && emailInput.value !== '' ? removeInvalidActive(emailInput) : addInvalidActive(emailInput, emailPopup);
};

function phoneValidation() {
	const phoneRegEx = /\W*_*/g;
	validPhone = phoneInput.value.replace(phoneRegEx, '');
	validPhone.length == 11 ? removeInvalidActive(phoneInput) : addInvalidActive(phoneInput, phonePopup);
	if (phoneInput.value == '') {
		removeInvalidActive(phoneInput);
		phonePopup.classList.remove('popup--active');
	}
	return validPhone;
};

function btnValidation() {
	const inputs = document.querySelectorAll('.feedback__input');
	const formBtn = document.querySelector('.feedback__button');
	const inputsStatusArr = [];

	inputs.forEach(input => {
		const status = input.querySelector('input').classList.contains('feedback__input--invalid');
		inputsStatusArr.push(status);
		return inputsStatusArr;
	});

	if (inputsStatusArr.includes(true) || nameInput.value == '' || emailInput.value == '' || validPhone == undefined) {
		formBtn.classList.add('disabled-button');
		formBtn.setAttribute('disabled', true);
	} else {
		formBtn.classList.remove('disabled-button');
		formBtn.removeAttribute('disabled')
	};
};

nameInput.addEventListener('change', () => {
	nameValidation();
	btnValidation();
});
emailInput.addEventListener('change', () => {
	emailValidation();
	btnValidation();
});
phoneInput.addEventListener('change', () => {
	phoneValidation();
	btnValidation();
});
