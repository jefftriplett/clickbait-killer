window.onload = function () {

var button = document.getElementById("do-test");
button.onclick = count();

function count() {
	var a = 0;
	var demo = document.getElementById("demo");
	return function () {
	    demo.textContent = ++a;
	}
}
}
