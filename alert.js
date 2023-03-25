function custom_alert( message, image) {
	var a = [document.createElement("div"), document.createElement("img"), document.createElement("div"), document.createElement("button")];
	a[2].innerHTML = message;
	a[3].innerHTML="Ok";
	a[1].src=image;
	a[0].className="msg";
	a[1].className="msg-img";
	a[2].className="msg-text";
	a[3].className="msg-btn";
	a[0].appendChild(a[1]);
	a[0].appendChild(a[2]);
	a[0].appendChild(a[3]);
	a[3].onclick=close;
	document.body.appendChild(a[0]);
}
function simple_alert(message) {
	var a = [document.createElement("div"), document.createElement("button")];
	a[0].innerHTML = message;
	a[1].innerHTML = "OK";
	a[0].className="msg";
	a[1].className="msg-btn";
	a[1].onclick=close;
	a[0].appendChild(a[1]);
	document.body.appendChild(a[0]);
}
function alert_close() {document.getElementById("alert-main").remove();}
function close() {
	document.getElementsByClassName('msg')[0].remove();
}