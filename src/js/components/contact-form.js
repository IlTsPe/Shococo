import { postJSONDataForm } from './sendFormData';

export const contactForm = () => {
	const contactName = document.getElementById("name");
	const contactCount = document.getElementById("count");
	const fountain = document.getElementById("fountain");
	const contactPhone = document.getElementById("phone");
	const contactEmail = document.getElementById("email");
	const modalSendBtn = document.querySelector(".modal__btn");
	const body = document.querySelector('body');

	const createStatusModal = (status) => {
		return `
		${status === true ?
				`<div class="status-modal success-modal">
			<div class="status-modal__container success-modal__container">
				<div class="status-modal__content">
					<p>Заявка отправлена 💌</p>
					<p>Мы скоро с Вами свяжемся 😎</p>
				</div>
			</div>
		</div>` :
				`<div class="status-modal fault-modal">
			<div class="status-modal__container fault-modal__container">
				<div class="status-modal__content">
					<p>Что-то пошло не так 💫</p>
					<p>Проверьте соединение с интернетом 🌐</p>
				</div>
			</div>
		</div>`}
	`
	}

	function showStatusSending(status) {
		body.insertAdjacentHTML('afterbegin', createStatusModal(status));
		const modal = document.querySelector('.status-modal');
		modal.classList.add('status-modal--active');
		setTimeout(() => {
			modal.classList.remove('status-modal--active');
		}, 3000);
		setTimeout(() => {
			modal.remove();
		}, 4000);
	}

	async function sendFormData() {
		let $data = {
			count: contactCount.value,
			name: contactName.value,
			email: contactEmail.value,
			phone: contactPhone.value,
			fountain: fountain.value
		}
		let res = await postJSONDataForm($data);
		if (res) {
			showStatusSending(res)
		}
		else {
			showStatusSending(res)
		}
	}

	modalSendBtn.addEventListener("click", sendFormData);

	document.querySelector('.modal__form').addEventListener('submit', (e) => {
		e.preventDefault();
	});
};
