import { postJSONDataForm } from './sendFormData';

export const contactForm = () => {
	const contactName = document.getElementById("name");
	const contactCount = document.getElementById("count");
	const fountain = document.getElementById("fountain");
	const contactPhone = document.getElementById("phone");
	const contactEmail = document.getElementById("email");
	const contactSendBtn = document.querySelector(".modal__btn");

	const sendsuccessModal = document.querySelector(".success-modal");
	const sendFaultModal = document.querySelector(".fault-modal");

	function showStatusSending(modal) {
		modal.classList.add('success-modal--active');
		setTimeout(() => {
			modal.classList.remove('success-modal--active');
		}, 3000)
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
			showStatusSending(sendsuccessModal)
		}
		else {
			showStatusSending(sendFaultModal)
		}
	}

	contactSendBtn.addEventListener("click", sendFormData);

	document.querySelector('.modal__form').addEventListener('submit', (e) => {
		e.preventDefault();
	});
};
