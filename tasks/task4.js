"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function deleteUser(id) {
	let req = fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
		method: "DELETE",
	});
	return req;
}

console.log(deleteUser(1));

module.exports = deleteUser;
