define(['vendor/jquery', 'app/util/util', 'app/util/emitor', 'app/util/compitableEvents', 'app/model/hardwareModel'], function($1, util, emitor, compitableEvents, hardwareModel) {
	var region;
	var filterList;
	var componentList;
	var search;
	var boardData;

	var container;
	var componentDialog;
	var componentContextMenu;
	var boardContextMenu;
	var contextMenuTarget;
	// var componentTemplate = '<li data-filter="{{filter}}" data-label="{{label}}" data-name="{{name}}"><div class="image-wrap"><img class="image" draggable="false" src="{{src}}" /></div><div class="name">{{label}}</div></li>'
	var componentTemplate = '<li data-filter="{{filter}}" data-label="{{label}}" data-name="{{name}}"><div class="hover"><i class="icon lezhi lz-act001"></i></div><div class="image-wrap"><img class="image" draggable="false" src="{{src}}" /></div><div class="name">{{label}}</div></li>'
	var mouseDownComponentDom;
	var dragContainer;
	var dragComponentDom;
	var startPreMouseMove;
	var preMouseMoveX;
	var preMouseMoveY;
	var dragMouseX;
	var dragMouseY;

	function init() {

		var sidebarTab = $('.sidebar-tabs .tab-hardware');
		search = $('.search', sidebarTab);
		filterList = $('.filters', sidebarTab);
		componentList = $('.components', sidebarTab);

		search.on('keyup', onSearchKeyup).on('change', onSearchChange).on('blur', onSearchBlur);
		$('> li', filterList).on('click', onFilterClick);

		region = $('.content-tabs .tab-hardware');
		container = $('.hardware-container', region).on('containerEvent', onContainerEvent);
		hardwareModel.init(container[0]);
		dragContainer = $('.component-drag-layer')[0];

		componentDialog = $('.component-dialog', region);
		$('.name', componentDialog).on('blur', onComponentNameBlur);

		boardContextMenu = $('.board-menu', region);
		$('> li', boardContextMenu).on('click', onBoardContextMenu);
		componentContextMenu = $('.component-menu', region);
		$('> li', componentContextMenu).on('click', onComponentContextMenu);

		emitor.on('app', 'start', onAppStart);
		emitor.on('app', 'contextMenu', onContextMenu);
		emitor.on('hardware', 'boardChange', onBoardChange);
		emitor.on('hardware', 'resize', onResize);
		emitor.on('sidebar', 'activeTab', onActiveTab);

		console.log($('.hover').length)

		$('.hardware-container', region).mouseover(function(){
			qwe0();
			function qwe0(){
				$('.component').css({
					"width":"150px",
					"height":"150px",
					"transform":"translate(-0%, -0%)"
				});
			}

			qwe();
			function qwe(){
				if($('.pin-PD4').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD6').css('display','none');
				}else{
					$('.pin-PD6').css('display','block');
				}
			}

			qwe1();
			function qwe1(){
				if($('.pin-PD2').hasClass('jsplumb-endpoint-full')){
					$('.pin-8').css('display','none');
					$('.pin-9').css('display','none');
				}else{
					$('.pin-8').css('display','block');
					$('.pin-9').css('display','block');
				}
			}

			runa0();
			function runa0(){
				if($('.pin-A0').hasClass('jsplumb-endpoint-full')){
					$('.pin-PA1').css('display','none');
					$('.pin-PA3').css('display','none');
					runa2();
				}else{
					$('.pin-PA1').css('display','block');
					$('.pin-PA3').css('display','block');
					runa1()
				}
			}
			function runa1(){
				if($('.pin-A1').hasClass('jsplumb-endpoint-full')){
					$('.pin-PA1').css('display','none');
					$('.pin-PA3').css('display','none');
					runa4();
				}else{
					$('.pin-PA1').css('display','block');
					$('.pin-PA3').css('display','block');
					runa6();
				}
			}
			function runa2(){
				if($('.pin-A2').hasClass('jsplumb-endpoint-full')){
					$('.pin-PA2').css('display','none');
					$('.pin-PA3').css('display','none');
					acc1();
				}else {
					$('.pin-PA2').css('display','block');
					$('.pin-PA3').css('display','none');
					runa3()
				}
			}
			function runa3(){
				if($('.pin-A3').hasClass('jsplumb-endpoint-full')){
					$('.pin-PA2').css('display','none');
					$('.pin-PA3').css('display','none');
					acc1();
				}else {
					$('.pin-PA2').css('display','block');
					$('.pin-PA3').css('display','none');
				}
			}
			function runa4(){
				if($('.pin-A2').hasClass('jsplumb-endpoint-full')){
					$('.pin-PA2').css('display','none');
					$('.pin-PA3').css('display','none');
					acc1();
				}else {
					$('.pin-PA2').css('display','block');
					$('.pin-PA3').css('display','none');
					runa5()
				}
			}
			function runa5(){
				if($('.pin-A3').hasClass('jsplumb-endpoint-full')){
					$('.pin-PA2').css('display','none');
					$('.pin-PA3').css('display','none');
					acc1();
				}else {
					$('.pin-PA2').css('display','block');
					$('.pin-PA3').css('display','none');
					acc1();
				}
			}
			function runa6(){
				if($('.pin-A2').hasClass('jsplumb-endpoint-full')){
					$('.pin-PA2').css('display','none');
					$('.pin-PA3').css('display','none');
					acc1();
				}else {
					$('.pin-PA2').css('display','block');
					$('.pin-PA3').css('display','block');
					runa7()
				}
			}
			function runa7(){
				if($('.pin-A3').hasClass('jsplumb-endpoint-full')){
					$('.pin-PA2').css('display','none');
					$('.pin-PA3').css('display','none');
					acc1();
				}else {
					$('.pin-PA2').css('display','block');
					$('.pin-PA3').css('display','block');
					run8();
				}
			}
			function run8(){
				if($('.pin-PA1').hasClass('jsplumb-endpoint-full')){
					$('.pin-A0').css('display','none');
					$('.pin-A1').css('display','none');
					$('.pin-PA3').css('display','none');
					run9();
				}else {
					$('.pin-A0').css('display','block');
					$('.pin-A1').css('display','block');
					$('.pin-PA3').css('display','block');
					run10()
				}
			}
			function run9(){
				if($('.pin-PA2').hasClass('jsplumb-endpoint-full')){
					$('.pin-A2').css('display','none');
					$('.pin-A3').css('display','none');
					$('.pin-PA3').css('display','none');
					acc1();
				}else {
					$('.pin-A2').css('display','block');
					$('.pin-A3').css('display','block');
					$('.pin-PA3').css('display','none');
					acc1();
				}
			}
			function run10(){
				if($('.pin-PA2').hasClass('jsplumb-endpoint-full')){
					$('.pin-A2').css('display','none');
					$('.pin-A3').css('display','none');
					$('.pin-PA3').css('display','none');
					acc1();
				}else {
					$('.pin-A2').css('display','block');
					$('.pin-A3').css('display','block');
					$('.pin-PA3').css('display','block');
					run11();
				}
			}
			function run11(){
				if($('.pin-PA3').hasClass('jsplumb-endpoint-full')){
					$('.pin-A0').css('display','none');
					$('.pin-A1').css('display','none');
					$('.pin-A2').css('display','none');
					$('.pin-A3').css('display','none');
					$('.pin-PA1').css('display','none');
					$('.pin-PA2').css('display','none');
					acc1();
				}else {
					$('.pin-A0').css('display','block');
					$('.pin-A1').css('display','block');
					$('.pin-A2').css('display','block');
					$('.pin-A3').css('display','block');
					$('.pin-PA1').css('display','block');
					$('.pin-PA2').css('display','block');
					acc1();
				}
			}
			function acc1(){
				if($('.pin-10').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD3').css('display','none');
					$('.pin-PD6').css('display','none');
					qqq1();
				}else {
					$('.pin-PD3').css('display','block');
					$('.pin-PD6').css('display','block');
					acc2();
				}
			}
			function acc2(){
				if($('.pin-11').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD3').css('display','none');
					$('.pin-PD6').css('display','none');
					qqq1();
				}else {
					$('.pin-PD3').css('display','block');
					$('.pin-PD6').css('display','block');
					acc3()
				}
			}
			function acc3(){
				if($('.pin-PD3').hasClass('jsplumb-endpoint-full')){
					$('.pin-10').css('display','none');
					$('.pin-11').css('display','none');
					$('.pin-PD6').css('display','none');
					qqq1();
				}else{
					$('.pin-10').css('display','block');
					$('.pin-11').css('display','block');
					$('.pin-PD6').css('display','block');
					acc4();
				}
			}
			function acc4(){
				if($('.pin-PD6').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD3').css('display','none');
					$('.pin-PD4').css('display','none');
					$('.pin-10').css('display','none');
					$('.pin-11').css('display','none');
					qqq0();
				}else{
					$('.pin-PD3').css('display','block');
					$('.pin-10').css('display','block');
					$('.pin-11').css('display','block');
					qqq0();
				}
			}
			
			function qqq0(){
				if($('.pin-2').hasClass('jsplumb-endpoint-full')){
					$('.pin-IICINT').css('display','none');
					$('.pin-PD1').css('display','none');
					$('.pin-PD5').css('display','none');
					qqq2();
				}else{
					$('.pin-PD1').css('display','block');
					$('.pin-PD5').css('display','block');
					$('.pin-IICINT').css('display','block');
					qqq1();
					www();
				}
			}
			function qqq1(){
				if($('.pin-3').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD1').css('display','none');
					$('.pin-PD5').css('display','none');
					qqq4();
				}else{
					$('.pin-PD1').css('display','block');
					$('.pin-PD5').css('display','block');
					qqq6();
				}
			}
			function qqq2(){
				if($('.pin-8').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD2').css('display','none');
					$('.pin-PD5').css('display','none');
				}else {
					$('.pin-PD2').css('display','block');
					$('.pin-PD5').css('display','none');
					qqq3()
				}
			}
			function qqq3(){
				if($('.pin-9').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD2').css('display','none');
					$('.pin-PD5').css('display','none');
				}else {
					$('.pin-PD2').css('display','block');
					$('.pin-PD5').css('display','none');
				}
			}
			function qqq4(){
				if($('.pin-8').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD2').css('display','none');
					$('.pin-PD5').css('display','none');
				}else {
					$('.pin-PD2').css('display','block');
					$('.pin-PD5').css('display','none');
					qqq5()
				}
			}
			function qqq5(){
				if($('.pin-9').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD2').css('display','none');
					$('.pin-PD5').css('display','none');
				}else {
					$('.pin-PD2').css('display','block');
					$('.pin-PD5').css('display','none');
				}
			}
			function qqq6(){
				if($('.pin-8').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD2').css('display','none');
					$('.pin-PD5').css('display','none');
				}else {
					$('.pin-PD2').css('display','block');
					$('.pin-PD5').css('display','block');
					qqq7()
				}
			}
			function qqq7(){
				if($('.pin-9').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD2').css('display','none');
					$('.pin-PD5').css('display','none');
				}else {
					$('.pin-PD2').css('display','block');
					$('.pin-PD5').css('display','block');
					qqq8();
				}
			}
			function qqq8(){
				if($('.pin-PD1').hasClass('jsplumb-endpoint-full')){
					$('.pin-2').css('display','none');
					$('.pin-3').css('display','none');
					$('.pin-PD5').css('display','none');
					qqq9();
				}else {
					$('.pin-2').css('display','block');
					$('.pin-3').css('display','block');
					$('.pin-PD5').css('display','block');
					qqq10()
				}
			}
			function qqq9(){
				if($('.pin-PD2').hasClass('jsplumb-endpoint-full')){
					$('.pin-8').css('display','none');
					$('.pin-9').css('display','none');
					$('.pin-PD5').css('display','none');
				}else {
					$('.pin-8').css('display','block');
					$('.pin-9').css('display','block');
					$('.pin-PD5').css('display','none');
				}
			}
			function qqq10(){
				if($('.pin-PD2').hasClass('jsplumb-endpoint-full')){
					$('.pin-8').css('display','none');
					$('.pin-9').css('display','none');
					$('.pin-PD5').css('display','none');
				}else {
					$('.pin-8').css('display','block');
					$('.pin-9').css('display','block');
					$('.pin-PD5').css('display','block');
					qqq11();
				}
			}
			function qqq11(){
				if($('.pin-PD5').hasClass('jsplumb-endpoint-full')){
					$('.pin-2').css('display','none');
					$('.pin-3').css('display','none');
					$('.pin-8').css('display','none');
					$('.pin-9').css('display','none');
					$('.pin-PD1').css('display','none');
					$('.pin-PD2').css('display','none');
				}else {
					$('.pin-2').css('display','block');
					$('.pin-3').css('display','block');
					$('.pin-8').css('display','block');
					$('.pin-9').css('display','block');
					$('.pin-PD1').css('display','block');
					$('.pin-PD2').css('display','block');
					www()
				}
			}

			function www(){
				if($('.pin-IICINT').hasClass('jsplumb-endpoint-full')){
					$('.pin-2').css('display','none');
				}else {
					$('.pin-2').css('display','block');
				}
			}

			runadd1();
			function runadd1(){
				if($('.pin-PD1').hasClass('jsplumb-endpoint-full')){
					$('.pin-2').css('display','none');
					$('.pin-PA3').css('display','none');
				}else{
					$('.pin-PA1').css('display','block');
					$('.pin-PA3').css('display','block');
				}
			}
			runadd2();
			function runadd2(){
				if($('.pin-PD5').hasClass('jsplumb-endpoint-full')){
					$('.pin-2').css('display','none');
					$('.pin-PA3').css('display','none');
				}else{
					$('.pin-PA1').css('display','block');
					$('.pin-PA3').css('display','block');
				}
			}
			runadd3();
			function runadd3(){
				if($('.pin-PD4').hasClass('jsplumb-endpoint-full')){
					$('.pin-PD6').css('display','none');
				}else{
					$('.pin-PD6').css('display','block');
				}
			}

		})
	}



	function loadSchema(schema) {
		hardwareModel.loadSchema(schema);

		updateComponents(schema.components);
	}

	function getData() {
		return hardwareModel.getData();
	}

	function setData(hardwareData) {
		hardwareData = hardwareData || {};
		hardwareModel.setData(hardwareData);

		hideComponentDialog();
	}

	function getBlockData() {
		var data = {};
		var hardwareData = getData();
		data.components = hardwareData.components.map(function(componentData) {
			return hardwareModel.getComponentData(componentData.uid);
		});

		return data;
	}

	function reset() {

	}

	function updateComponents(components) {
		componentList.empty();
		components.forEach(function(component) {
			var li = componentTemplate.replace(/\{\{name\}\}/g, component.name)
				.replace(/\{\{label\}\}/g, component.label)
				.replace(/\{\{filter\}\}/, component.category)
				.replace(/\{\{src\}\}/, component.imageUrl)
				.replace(/\{\{src2\}\}/, component.imageUrl2);

			componentList.append(li);

		});
		[].forEach.call(componentList[0].querySelectorAll("li .image"), function(imageDom) {
			imageDom.addEventListener(compitableEvents.down, onComponentMouseDown);
		});

		filterList.find('[data-filter="all"]').click();
		console.log($('.hover').length)
	}

	function onAppStart() {

	}

	function onActiveTab(name) {
		name == "hardware" ? dragContainer.classList.add("active") : dragContainer.classList.remove("active");
	}

	function onResize() {
		hardwareModel.repaint();
	}

	function onContextMenu(e) {
		var target = $(e.target);
		if (target.hasClass('component') && target.parents(container.selector).length) {
			contextMenuTarget = target;
			var offset = region.offset();
			var top = e.pageY - offset.top;
			var height = componentContextMenu.height();

			if (e.pageY + height > $(window).innerHeight()) {
				top = top - height;
			}
			componentContextMenu.addClass("active").css({
				left: e.pageX - offset.left,
				top: top,
			});
		} else if ((target.hasClass('board') || target.closest('.board').length) && target.parents(container.selector).length) {
			var offset = region.offset();
			boardContextMenu.addClass("active").css({
				left: e.pageX - offset.left,
				top: e.pageY - offset.top,
			});
		}
	}

	function onBoardContextMenu(e) {
		var li = $(this);
		var action = li.data('action');
		switch (action) {
			case "disconnect":
				hardwareModel.disconnectAllComponents();
				break;
			case "delete":
				hardwareModel.removeBoard();
				emitor.trigger("hardware", "removeBoard");
				break;
		}
	}

	function onComponentContextMenu(e) {
		if (!contextMenuTarget) {
			return;
		}

		var componentDom = contextMenuTarget[0];

		var li = $(this);
		var action = li.data('action');
		switch (action) {
			case "copy":
				var offset = 10;
				var x = 100 * (componentDom.offsetLeft + offset) / container.width();
				var y = 100 * (componentDom.offsetTop + offset) / container.height();
				var copyComponentDom = hardwareModel.addComponent({
					name: componentDom.dataset.name,
					x: x,
					y: y
				});
				hardwareModel.selectComponent(copyComponentDom);
				break;
			case "disconnect":
				hardwareModel.disconnectComponent(componentDom);
				break;
			case "delete":
				hardwareModel.removeComponent(componentDom);
				break;
		}
	}

	function onComponentMouseDown(e) {
		//  点击拖拽模块  （置放前）
		console.log('1');
		// $('.hover').css('display','none')
		e.stopPropagation();
		e.returnValue = false;

		mouseDownComponentDom = e.currentTarget;
		startPreMouseMove = true;
		
		function run (){
			$('.components').find('li:first-child').find('.image-wrap').attr('display','none');
		}
		run();
		document.addEventListener(compitableEvents.up, onComponentMouseUpBeforeMove);
		document.addEventListener(compitableEvents.move, onComponentPreMouseMove);
	}

	function onComponentMouseUpBeforeMove(e) {
		//  点击模块（放置之前）
		$('.hover').css('display','none')

		mouseDownComponentDom = null;
		document.removeEventListener(compitableEvents.up, onComponentMouseUpBeforeMove);
		document.removeEventListener(compitableEvents.move, onComponentPreMouseMove);

	}

	function onComponentPreMouseMove(e) {
		
		e = compitableEvents.isMobile ? e.changedTouches[0] : e;
		if (startPreMouseMove) {
			startPreMouseMove = false;
			preMouseMoveX = e.pageX;
			preMouseMoveY = e.pageY;

			var rect = mouseDownComponentDom.getBoundingClientRect();
			var containerRect = dragContainer.getBoundingClientRect();

			console.dir(dragContainer)

			dragMouseX = e.pageX - rect.left + containerRect.left - dragContainer.scrollLeft;
			dragMouseY = e.pageY - rect.top + containerRect.top - dragContainer.scrollTop;
		} else {
			var distanceX = e.pageX - preMouseMoveX;
			var distanceY = e.pageY - preMouseMoveY;

			if ((Math.abs(distanceX) >= 5) || (Math.abs(distanceY) >= 5)) {
				document.removeEventListener(compitableEvents.move, onComponentPreMouseMove);
				document.addEventListener(compitableEvents.move, onComponentMouseMove);
			}
		}
	}

	function onComponentMouseMove(e) {
		// console.log(1);   放置之前的移动
		e = compitableEvents.isMobile ? e.changedTouches[0] : e;
		
		if (mouseDownComponentDom) {
			document.removeEventListener(compitableEvents.up, onComponentMouseUpBeforeMove);
			document.addEventListener(compitableEvents.up, onComponentMouseUp);
			
			var li = $(mouseDownComponentDom).closest("li")[0];
			dragComponentDom = document.createElement("img");
			dragComponentDom.src = mouseDownComponentDom.src;
			dragComponentDom.dataset.name = li.dataset.name;
			dragComponentDom.classList.add("drag-component");
			dragContainer.appendChild(dragComponentDom);
			container.addClass("can-drop");

			mouseDownComponentDom = null;

			emitor.trigger("sidebar", "toggle");
		}

		dragComponentMove(dragComponentDom, e.clientX, e.clientY);
	}

	function onComponentMouseUp(e) {
		//  松开鼠标 放入模块
		e = compitableEvents.isMobile ? e.changedTouches[0] : e;
		document.removeEventListener(compitableEvents.move, onComponentMouseMove);
		document.removeEventListener(compitableEvents.up, onComponentMouseUp);
		var name = dragComponentDom.dataset.name;
		dragComponentDom.remove();
		dragComponentDom = null;
		container.removeClass("can-drop");
		onContainerDrop(name, e.pageX, e.pageY);
		emitor.trigger("sidebar", "toggle");
	}

	function dragComponentMove(componentDom, clientX, clientY) {
		// console.log('1')
		var offset = 30;
		// var offset = 0;

		var x = clientX - dragMouseX;
		var y = clientY - dragMouseY;
		if (x < 0) {
			x = 0;
		} else if (x + offset >= dragContainer.offsetWidth) {
			x = dragContainer.offsetWidth - offset;
		}
		if (y < 0) {
			y = 0;
		} else if (y + offset >= dragContainer.offsetHeight) {
			y = dragContainer.offsetHeight - offset;
		}

		componentDom.style.transform = "translate(" + x + "px, " + y + "px)";
	}

	function onContainerDrop(name, pageX, pageY) {
		var rect = container[0].getBoundingClientRect();
		if(pageX < rect.left || pageX > rect.right || pageY < rect.top || pageY > rect.bottom) {
			return;
		}

		var schema = hardwareModel.getSchema();
		var component = schema.components[name];
		var x = 100 * (pageX - rect.left - 0.5 * component.width) / container.width();
		var y = 100 * (pageY - rect.top - 0.5 * component.height) / container.height();

		var componentDom = hardwareModel.addComponent({
			name: name,
			x: x,
			y: y
		});
		hardwareModel.selectComponent(componentDom);
		showComponentDialog(componentDom.dataset.uid);
	}

	function onContainerEvent(e) {
		// console.log('1')
		var action = e.originalEvent.action;
		if(action == "select-component") {
			showComponentDialog(e.originalEvent.data.uid);
		} else if(action == "remove-component") {
			var uid = e.originalEvent.data.uid;
			uid == componentDialog.data("uid") && hideComponentDialog();
		} else if(action == "remove-all-components") {
			hideComponentDialog();
		}
	}

	function onBoardChange(name) {
		boardData = hardwareModel.addBoard(name);
	}

	function onFilterClick(e) {
		var li = $(this);
		util.toggleActive(li);

		componentList.find("> li.active").removeClass("active");
		var filter = li.data('filter');
		var list = filter == "all" ? componentList.find("> li") : componentList.find('> li[data-filter="' + filter + '"]');
		list.addClass("active");
	}

	function doComponentSearch() {
		var key = search.val().toLowerCase();
		if (!key) {
			return;
		}

		var filter = filterList.find("> li.active").data("filter");
		var list = filter == "all" ? componentList.find("> li") : componentList.find('> li[data-filter="' + filter + '"]');
		list.removeClass("active").filter(function(i, item) {
			var li = $(item);
			return li.data('label').toLowerCase().indexOf(key) >= 0 || li.data('name').toLowerCase().indexOf(key) >= 0;
		}).addClass("active");
	}

	function doComponentFilter() {
		var filter = filterList.find("> li.active").data("filter");
		var list = filter == "all" ? componentList.find("> li") : componentList.find('> li[data-filter="' + filter + '"]');
		list.addClass("active");
	}

	function onSearchKeyup(e) {
		e.keyCode == 13 && doComponentSearch();
	}

	function onSearchChange(e) {
		!search.val() && doComponentFilter();
	}

	function onSearchBlur(e) {
		doComponentSearch();
	}

	function onComponentNameBlur(e) {
		// ¼ÇÂ¼ÏÂ ÐÞ¸ÄÖ®ºó Ó²¼þÄ£¿éµÄÃû×Ö£»
		var uid = componentDialog.data("uid");
		var name = componentDialog.find(".name").val();
		var componentData = hardwareModel.getComponentData(uid);
		componentData.varName = name;
		// console.dir(componentData);   
		// ÐÞ¸ÄÃû×ÖÖ®ºó ¼ÇÂ¼Á¬ÏßÓ²¼þµÄËùÓÐÐÅÏ¢
	}

	function hideComponentDialog() {
		// console.log('É¾³ýËùÓÐµÄÓ²¼þÄ£¿é')
		// É¾³ýËùÓÐµÄÓ²¼þÄ£¿é  
		componentDialog.removeClass("active").data("uid", "").find(".name").val("");
	}

	function showComponentDialog(uid) {
		var componentData = hardwareModel.getComponentData(uid);
		componentDialog.addClass("active").data("uid", uid).find(".name").val(componentData.varName);
	}

	return {
		init: init,
		loadSchema: loadSchema,
		getData: getData,
		setData: setData,

		getBlockData: getBlockData,

		reset: reset,
	};
});