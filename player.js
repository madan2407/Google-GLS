var loadScript = function(url) {
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
};

var loadCSS = function(url) {
    var link = document.createElement('link');
    link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	$('head').append(link);
};

loadScript("https://code.jquery.com/jquery-3.5.1.min.js");
loadCSS("https://guidedlearning.oracle.com/player/latest/static/css/stTip.css");