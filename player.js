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

var getJsonStructure = function(url) {
	$.ajax({
	dataType: "jsonp",
	url: url,
	success: function(d) {
		data = d.data;
		loadStyle(data.css);
		renderStep();
	}});
};

setTimeout(function() {
	getJsonStructure("https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&amp;refresh=true&amp;env=dev&amp;type=startPanel&amp;vars%5Btype%5D=startPanel&amp;sid=none&amp;_=1582203987867");
}, 10);