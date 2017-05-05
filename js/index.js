var _title = document.getElementById("title");
var _text = Array.from(_title.getAttribute("title"));

function get_random_type_time() {
	return Math.random() * 300 + 200;
};

function type() {
	var char = _text.shift();
	if (!char)
		return;
	if (char === ' ')
		_title.innerHTML += "<br />";
	else
		_title.innerHTML += char;
	setTimeout(type, get_random_type_time());
};

window.addEventListener("load", type, false);