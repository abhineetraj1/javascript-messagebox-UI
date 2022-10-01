function custom_alert(title, message, image) {
	var a = '<div id="alert-main"><div id="alert-message-container"><img src="' + image + '" id="alert-message-img"><div id="alert-message-info"><div id="alert-message-title">' + title + '</div><div id="alert-message-message">' + message + '</div><button id="alert-message-btn" onclick="alert_close()">Close</button></div></div><style type="text/css">#alert-message-container{background: white;position: fixed;top: 25vh;left: 30%;border: solid;height: 225px;width: 40%;}#alert-message-img{width: 50%;height: 225px;float: left;}#alert-message-info{width: 50%;float: right;}#alert-message-title{margin: 1vh;font-family: Cambria Math;font-size: 25px;font-weight: bold;}#alert-message-message{font-size: 21px;font-family: Georgia;margin: 1vh;}#alert-message-btn{font-size: 22px;margin: 1vh;font-family: Cambria;border: solid;}</style><script type="text/javascript">if(window.innerHeight > window.innerWidth) {document.getElementById("alert-message-container").style.left="0px";document.getElementById("alert-message-container").style.width="95%";} else if (window.innerHeight == window.innerWidth) {document.getElementById("alert-message-container").style.left="0px";document.getElementById("alert-message-container").style.width="95%";} else{}</script></div>';
	document.body.innerHTML = document.body.innerHTML + a;
	if (window.innerHeight>window.innerWidth) {
		document.getElementById("alert-message-container").style.width="95%";
		document.getElementById("alert-message-container").style.left="2px";
	}
}
function simple_alert(title, message) {
	var a = '<div id="alert-main"><div id="alert-con"><div id="alert-title">' + title + '</div><div id="alert-message"> ' + message + ' </div><center><button id="alert-btn" onclick="alert_close()">Close</button></center></div><style type="text/css">#alert-con{background: white;position: fixed;top: 30vh;height: 40vh;width: 95%;border: solid;}#alert-title{text-align: center;font-family: Cambria;font-size: 22px;background: black;color: white;width: 100%;}#alert-message{font-size: 22px;height: 20vh;margin: 1vh;}#alert-btn{font-size: 22px;font-family: Cambria Math;padding: 2px;background: red;color: white;border: solid;margin: 2px;}</style><script type="text/javascript">if (window.innerHeight<window.innerWidth){document.getElementById("alert-con").style.width="40%";document.getElementById("alert-con").style.left=window.innerWidth/3;}</script></div>';
	document.body.innerHTML = document.body.innerHTML + a;
	if (window.innerHeight<window.innerWidth) {
		document.getElementById("alert-con").style.width="40%";
		document.getElementById("alert-con").style.left=window.innerWidth/3+"px";
	}
}
function alert_close() {document.getElementById("alert-main").remove();}
