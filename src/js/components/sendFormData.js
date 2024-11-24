export async function postJSONDataForm(data) {
	try {
		const response = await fetch("../php/tg.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const result = await response;
		if (response.status === 200) {
			return true;
		}
		return false;
	} catch (error) {
		console.error("Error:", error);
		return false;
	}
};