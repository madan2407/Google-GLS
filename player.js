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

var loadStyle = function(css) {
	var style = $('<style></style>');	
	style.append(css);
	$('head').append(style);
}

loadScript("https://code.jquery.com/jquery-3.5.1.min.js");
loadCSS("https://guidedlearning.oracle.com/player/latest/static/css/stTip.css");

var curr_step = -1;
var renderStep = function() {
	curr_step++;
	var sttip = $('.sttip');
	if (sttip.length) {
		sttip.detach();
	}
	var step = data.structure.steps[curr_step].action;
	var next = data.structure.steps[curr_step].next;
	if (step.type === 'tip') {
		var sttip = $('<div class="sttip"></div>');
		var tooltip_in = $('<div class="tooltip in ' + step.classes + ' ' + step.placement + '"></div>');
		var tooltip_arrow = $('<div class="tooltip-arrow"></div>');
		var second_arrow = $('<div class="tooltip-arrow second-arrow"></div>');
		var popover_inner = $('<div class="popover-inner"></div>').append($(data.tiplates.tip));
		var popover_content = popover_inner.find('.popover-content');
		popover_content.append($(step.contents["#content"]));
		tooltip_in.append(tooltip_arrow);
		tooltip_in.append(second_arrow);
		tooltip_in.append(popover_inner);
		sttip.append(tooltip_in);
		var stepCount = sttip.find('[data-iridize-role="stepCount"]');
		stepCount[0].innerHTML = curr_step + 1;
		var stepsCount = sttip.find('[data-iridize-role="stepsCount"]');
		stepsCount[0].innerHTML = data.structure.steps.length - 1;
		var selector = $(step.selector)
		sttip[0].style.position = 'absolute';
		sttip[0].style.left = selector[selector.length - 1].offsetLeft + selector[selector.length - 1].width + 'px';
		selector.parent().append(sttip);
		var next_btn = popover_inner.find('.next-btn');
		next_btn.click(renderStep);
		if (step.roleTexts["nextBt"]) {
			$('[data-iridize-role="nextBt"]')[0].innerText = step.roleTexts["nextBt"];
		}
		if (next) {
			$(next['selector'])[next['event']](function(event) {
				event.preventDefault();
				renderStep();
			});
		}
		$('[data-iridize-role="closeBt"]').click(function() {
			$('.sttip').detach();
		});
	} else {
		curr_step = -1;
	}
};

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