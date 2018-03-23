(function (window) {
	var ajax = function (url, cb) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				cb(null, this.responseText);
			}
		};
		xhttp.onerror = function (request, event) {
			cb(event, this.responseText);
		};
		xhttp.open('GET', url, true);
		xhttp.send();
	};
	window.ajax = ajax;
})(window);
