define(['vendor/jquery', 'app/util/util', 'app/util/emitor'], function($1, util, emitor) {
	var tabs;
	var region;

	function init() {
		$(window).on('click', onWindowClick);

		var region = $('.sidebar-region');

		$('.logo', region).on('click', onLogoClick);
		$('.center > li', region).on('click', onTabClick);
		$('.bottom > li', region).on('click', onBottomTabClick);

		tabs = $('.sidebar-tabs');

		emitor.on('app', 'start', onAppStart);
		emitor.on('sidebar', 'toggle', onTabToggle);

		var alertInput = $('.block-statement .statement-content').find('.connector-input');
	}

	function onAppStart() {
		$('li[data-action="hardware"]', region).click();
	}

	function onTabClick(e) {

		var li = $(this);
		util.toggleActive(li);

		var action = li.data('action');
		if(action == "code") {
			li.addClass("fold");
			tabs.find('.tab.active').removeClass("active");
			tabs.removeClass("slide-in").removeClass("slide-out").removeClass("active");
		} else {
			var tab = tabs.find(".tab-" + action);
			var activeTab = tabs.find(".tab.active");
			if(activeTab.length == 0) {
				li.removeClass("fold");
				tab.addClass("active");

				tabs.removeClass("slide-out").addClass("active").addClass("slide-in");
			} else if(tab.hasClass("active")) {
				li.addClass("fold");
			
				tabs.removeClass("slide-in").addClass("slide-out").delay(300, "slide-out").queue("slide-out", function() {
					tab.removeClass("active");
					tabs.removeClass("active").removeClass("slide-out");
				});
				tabs.dequeue("slide-out");
			} else {
				activeTab.removeClass("active");
				tab.addClass("active");
			}
		}


		var modulebs = $('.module.block-statement');
		var modulebo = $('.module.block-output');
		var functions = $('.function.block-statement');
		var functiono = $('.function.block-output');
		var functionsi = $('.function.block-statement-input'); 
		var vars = $('.var.block-statement');
		var varo = $('.var.block-output');
		var codes = $('.code.block-statement');
		var codeo = $('.code.block-output');
		var maths = $('.math.block-statement');
		var matho = $('.math.block-output');
		var texts = $('.text.block-statement');
		var texto = $('.text.block-output');
		var controls = $('.control.block-statement');
		var controlo = $('.control.block-output');
		var controlsi = $('.control.block-statement-input'); 
		var logics = $('.logic.block-statement');
		var logico = $('.logic.block-output');



		function add(){
			modulebs.addClass('modulebs');
			modulebo.addClass('modulebo');
			functions.addClass('functions');
			functiono.addClass('functiono');
			functionsi.addClass('functionsi')
			vars.addClass('vars');
			varo.addClass('varo');
			codes.addClass('codes');
			codeo.addClass('codeo');
			maths.addClass('maths');
			matho.addClass('matho');
			texts.addClass('texts');
			texto.addClass('texto');
			controls.addClass('controls');
			controlo.addClass('controlo');
			controlsi.addClass('controlsi');
			logics.addClass('logics');
			logico.addClass('logico');
		}
		add();


		emitor.trigger("sidebar", "activeTab", action);
		
		return false;
	}

	function onLogoClick(e) {
		var isWeixin = navigator.userAgent.match(/MicroMessenger/) ? true : false;
		if(isWeixin) {
			// window.location.href = window.location.pathname + "?" + new Date().getTime();
		} else {
			// window.location.href = "http://www.kenrobot.com";
		}
	}

	function onBottomTabClick(e) {
		var li = $(this);
		var action = li.data('action');
		switch(action) {
			case "share":
				emitor.trigger("project", "share");
				break;
			case "help": 
				window.open(li.data("href"));
				break;
		}

		return false;
	}

	function onTabToggle() {
		util.isMobile() && $('.center > li.active', region).click();
	}

	function onWindowClick(e) {
		if(!e.pageX || !e.pageY || !util.isMobile() || !tabs.hasClass("active")) {
			return;
		}

		var rect = tabs[0].getBoundingClientRect();
		if(e.pageX >= rect.left && e.pageX <= rect.right && e.pageY >= rect.top && e.pageY <= rect.bottom) {
			return;
		}

		rect = $('.center', region)[0].getBoundingClientRect();
		if(e.pageX >= rect.left && e.pageX <= rect.right && e.pageY >= rect.top && e.pageY <= rect.bottom) {
			return;
		}

		$('.center > li.active', region).click();
	}

	return {
		init: init,
	};
});