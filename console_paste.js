function getScript(url) {
    e = document.createElement('script');
    e.src = url;
    document.body.appendChild(e);
}
getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
getScript('https://raw.github.com/cincodenada/Cookie-Monster/master/core.js.min&');
