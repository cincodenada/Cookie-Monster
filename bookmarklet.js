javascript: (function () {
	var jA = document.createElement('script');
	jA.setAttribute('type', 'text/javascript');
	jA.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
	jA.onload = function() {
		var jB = document.createElement('script');
		jB.setAttribute('type', 'text/javascript');
		jB.setAttribute('src', 'https://raw.github.com/cincodenada/Cookie-Monster/master/core.js.min&' + new Date().getTime());
		document.body.appendChild(jB);
	};
	document.body.appendChild(jA);
}());
