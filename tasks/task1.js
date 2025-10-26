"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

function fetchUsers() {
	let req = fetch("https://jsonplaceholder.typicode.com/users");
	return req.then(data => data.json());
}

console.log(fetchUsers())

module.exports = fetchUsers;
