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