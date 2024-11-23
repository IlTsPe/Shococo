import { postJSONDataForm } from './sendFormData';

const contactName = document.getElementById("name");
const contactCount = document.getElementById("count");
const fountain = document.getElementById("fountain");
const contactPhone = document.getElementById("phone");
const contactEmail = document.getElementById("email");
const contactSendBtn = document.querySelector(".feedback-btn");

const sendSuccesModal = document.querySelector(".succes-modal");
const sendFaultModal = document.querySelector(".fault-modal");

function showStatusSending(modal) {
	modal.classList.add('succes-modal--active');
	setTimeout(() => {
		modal.classList.remove('succes-modal--active');
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
		showStatusSending(sendSuccesModal)
	}
	else {
		showStatusSending(sendFaultModal)
	}
}

contactSendBtn.addEventListener("click", sendFormData);
