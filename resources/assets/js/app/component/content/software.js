define(['vendor/jquery', 'app/util/util', 'app/util/emitor', 'app/model/softwareModel'], function($1, util, emitor, softwareModel) {
	var region;
	var container;
	var dragContainer;
	var filterList;
	var blockList;
	var filterWrap;
	var contextMenuTarget;
	var blockContextMenu;
	var modules;

	function init() {
		var sidebarTab = $('.sidebar-tabs .tab-software');
		filterList = $('.filters', sidebarTab);

		blockList = $('.blocks', sidebarTab);
		// console.dir(blockList)  UL列表f
		filterWrap = $('.filter', sidebarTab);
		$('.advanced', filterWrap).on("click", onAdvancedClick).data("basic");

		$('> li', filterList).on('click', onFilterClick);

		region = $('.content-tabs .tab-software');
		container = $(".software-container", region);
		$('.block-group-region .group-header > span', region).on('click', onGroupHeaderClick);
		dragContainer = $('.block-drag-layer');

		softwareModel.init(container[0], dragContainer[0]);

		blockContextMenu = $('.block-menu', region);
		$('> li', blockContextMenu).on('click', onBlockContextMenu);

		emitor.on('app', 'start', onAppStart);
		emitor.on('app', 'contextMenu', onContextMenu);
		emitor.on('sidebar', 'activeTab', onActiveTab);
		emitor.on('block', 'drag-start', onBlockDragStart);
		emitor.on('block', 'drag-end', onBlockDragEnd);

		var alertInput = $('.content-region .connector-input');

	}

	function loadSchema(schema) {
		// console.log(1)
		softwareModel.loadSchema(schema);

		createBlocks(schema.blocks);
	}

	function getData() {
		return softwareModel.getData();
	}

	function setData(data) {
		softwareModel.setData(data);

		var globalBlock = softwareModel.getGroupBlock("global");
		var setupBlock = softwareModel.getGroupBlock("setup");
		var loopBlock = softwareModel.getGroupBlock("loop");

		globalBlock.setConnectable(true);
		setupBlock.setConnectable(true);
		loopBlock.setConnectable(true);

		$('.block-global', region).removeClass("active").addClass(globalBlock.hasChildren() ? "with-content" : "").find(".group-extension").append(globalBlock.dom);
		$('.block-setup', region).removeClass("active").addClass(setupBlock.hasChildren() ? "with-content" : "").find(".group-extension").append(setupBlock.dom);
		$('.block-loop', region).addClass("active").addClass(loopBlock.hasChildren() ? "with-content" : "").find(".group-extension").append(loopBlock.dom);
	}

	function getCode(hardwareData) {
		// console.log(1)
		var codeInfo = softwareModel.getCode();

		var includeCode = [];
		var extraCode = '';
		var varCode = '';
		var setupCode = '';
		var tempCode;
		var code;

		var nameReg = new RegExp('{NAME}', 'g');
		hardwareData.components.sort(function(a, b) {
			return a.name.localeCompare(b.name);
		}).forEach(function(componentData) {
			code = componentData.code;
			if (code.include) {
				includeCode = includeCode.concat(code.include.split('\n'));
				// includeCode = includeCode.concat(code.include.split(','));
			}
			if (code.var) {
				tempCode = code.var.replace(nameReg, componentData.varName);
				var pins = componentData.pins;
				for (var name in pins) {
					tempCode = tempCode.replace(new RegExp('{' + name + '}', 'g'), pins[name]);
				}
				varCode += tempCode;
			}
			if (code.setup) {
				tempCode = code.setup.replace(nameReg, componentData.varName);
				var pins = componentData.pins;
				for (var name in pins) {
					tempCode = tempCode.replace(new RegExp('{' + name + '}', 'g'), pins[name]);
				}
				setupCode += tempCode;
			}
			// if (code.extra) {
			// 	tempCode = code.extra.replace(nameReg, componentData.varName);
			// 	var pins = componentData.pins;
			// 	for (var name in pins) {
			// 		tempCode = tempCode.replace(new RegExp('{' + name + '}', 'g'), pins[name]);
			// 	}
			// 	extraCode += code.extra;
			// }
			if (code.extra) {
				extraCode += code.extra;
			}
		});
		includeCode = includeCode.sort().reduce(function(result, line) {
			(result.length == 0 || result[result.length - 1] != line) && result.push(line);
			return result;
		}, []).join('\n');

		codeInfo.include = includeCode;
		codeInfo.extra = extraCode;
		codeInfo.global = varCode + codeInfo.global;
		codeInfo.setup = setupCode + codeInfo.setup;
		return codeInfo;
	}

	function reset() {
		console.log(1)

	}

	function createBlocks(blocks) {

		blockList.empty();
		blocks.forEach(function(blockData) {
			if (blockData.type == "group") {
				return;
			}

			var block = softwareModel.createBlock(blockData.name);
			var li = $('<li>').data("filter", blockData.tags.concat());
			blockData.tags.indexOf("module") >= 0 && li.data("module", blockData.module);
			blockList.append(li.append(block.dom));
		});

		// console.log(blocks.length);
		for (var i = 0; i < blocks.length; i++) {
			// console.log(blocks[i])
		}
	}

	function updateBlocks(hardwareData) {
		// console.dir(hardwareData)
		modules = ["default"];

		var groups = {};
		var group;
		var groupName;

		hardwareData.components.forEach(function(componentData) {
			modules.indexOf(componentData.type) < 0 && modules.push(componentData.type);
			groupName = componentData.type + "s";
			group = groups[groupName] || (groups[groupName] = []);
			group.push({
				id: componentData.uid,
				name: componentData.varName,
			});
		});

		if (hardwareData.components.length > 0) {
			group = hardwareData.components.map(function(componentData) {
				return {
					id: componentData.uid,
					name: componentData.varName,
				};
			});
			var module = "hardwareVariable";
			modules.push(module);
			groups[module + "s"] = group;
		}

		softwareModel.updateDynamicBlocks(groups);

		var li = filterList.find("li.active");
		li.length == 0 && (li = filterList.find("li:eq(0)"));
		li.click();
	}

	function onAppStart() {

	}

	function onBlockDragStart() {
		// 点击开始拖拽模块
		emitor.trigger("sidebar", "toggle");
	}

	function onBlockDragEnd() {
		// 拖拽模块过程结束
		emitor.trigger("sidebar", "toggle");
	}

	function onActiveTab(name) {
		// 显示被选择中的tab页面
		name == "software" ? dragContainer.addClass("active") : dragContainer.removeClass("active");
		name == "software" && emitor.trigger("software", "update-block");
	}

	function onContextMenu(e) {
		console.log(1)
		var target = $(e.target).closest(".block");
		if (target.length && (target.parents(container.selector).length || target.parents(dragContainer.selector).length) && !target.hasClass("block-group")) {
			contextMenuTarget = target;
			var blockDom = contextMenuTarget[0];
			var block = softwareModel.getBlock(blockDom.dataset.uid);

			block.isEnable() ? blockContextMenu.addClass("comment") : blockContextMenu.removeClass("comment");
			(!block.isEnable() && !block.isFree()) ? blockContextMenu.addClass("uncomment"): blockContextMenu.removeClass("uncomment");

			var height = blockContextMenu.height();
			var offset = region.offset();
			var top = e.pageY - offset.top;
			var left = e.pageX - offset.left;

			if (e.pageY + height > $(window).innerHeight()) {
				top = top - height;
			}
			blockContextMenu.addClass("active").css({
				left: left,
				top: top,
			});
		}
	}

	function onBlockContextMenu(e) {
		console.log(1)
		if (!contextMenuTarget) {
			return;
		}

		var blockDom = contextMenuTarget[0];
		var block = softwareModel.getBlock(blockDom.dataset.uid);

		var li = $(this);
		var action = li.data('action');
		switch (action) {
			case "copy":
				var offset = 20;
				var copyBlock = block.copy();
				if (block.isFree()) {
					var blockOffset = block.getOffset();
					copyBlock.setOffset(blockOffset.left + offset, blockOffset.top - offset);
				} else {
					var rect = blockDom.getBoundingClientRect();
					var containerOffset = dragContainer.offset();
					var left = rect.left - containerOffset.left;
					var top = rect.top - containerOffset.top;
					copyBlock.setOffset(left + offset, top - offset);
				}

				dragContainer.append(copyBlock.dom);
				break;
			case "comment":
				block.setEnable(false);
				break;
			case "uncomment":
				block.setEnable(true);
				break;
			case "delete":
				block.remove();
				break;
		}
	}

	function onFilterClick(e) {
		//  点击切换 编程控制菜单
		var li = $(this);
		util.toggleActive(li);

		var filter = li.data('filter');
		$('.filter-name', filterWrap).text(li.text());
		$('.advanced', filterWrap).data('action', "basic");

		blockList.children().each(function(index, child) {
			var blockLi = $(child);
			var filters = blockLi.data("filter");
			if (filters.indexOf(filter) < 0 || filters.indexOf("advanced") >= 0) {
				blockLi.removeClass('active');
				return;
			}

			if (filter == "module" && modules.indexOf(blockLi.data("module")) < 0) {
				blockLi.removeClass("active");
				return;
			}

			blockLi.addClass("active");

			clickLi1();

			function clickLi1() {
				if ($('.tab-software .filters-wrap .filters li:nth(1)').hasClass('active')) {
					$('.blocks li:nth(21)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(2)').hasClass('active')) {
					$('.blocks li:nth(21)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(3)').hasClass('active')) {
					$('.blocks li:nth(21)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(4)').hasClass('active')) {
					$('.blocks li:nth(21)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(5)').hasClass('active')) {
					$('.blocks li:nth(21)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(6)').hasClass('active')) {
					$('.blocks li:nth(21)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(7)').hasClass('active')) {
					$('.blocks li:nth(21)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(0)').hasClass('active')) {
					$('.blocks li:nth(21)').css('display', 'block');
				}
			}

			clickLi2();

			function clickLi2() {
				if ($('.tab-software .filters-wrap .filters li:nth(1)').hasClass('active')) {
					$('.blocks li:nth(105)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(2)').hasClass('active')) {
					$('.blocks li:nth(105)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(3)').hasClass('active')) {
					$('.blocks li:nth(105)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(4)').hasClass('active')) {
					$('.blocks li:nth(105)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(5)').hasClass('active')) {
					$('.blocks li:nth(105)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(6)').hasClass('active')) {
					$('.blocks li:nth(105)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(7)').hasClass('active')) {
					$('.blocks li:nth(105)').css('display', 'none');
				} else if ($('.tab-software .filters-wrap .filters li:nth(0)').hasClass('active')) {
					$('.blocks li:nth(105)').css('display', 'block');
				}
			}
		});
	}

	function onAdvancedClick(e) {
		console.log(1)
		var li = filterList.find("li.active");
		if (!li.length) {
			return;
		}

		var filter = li.data('filter');
		var advanced = $(".advanced", filterWrap);
		var isAdvanced;
		if (advanced.data("action") == "advanced") {
			advanced.data('action', "basic").val("高级");
			isAdvanced = false;
		} else {
			advanced.data("action", "advanced").val("基础");
			isAdvanced = true;
		}

		blockList.children().each(function(index, child) {
			var blockLi = $(child);
			var filters = blockLi.data('filter');
			if (filters.indexOf(filter) < 0) {
				blockLi.removeClass('active');
				return;
			}

			var a = filters.indexOf("advanced") >= 0;
			if ((isAdvanced && !a) || (!isAdvanced && a)) {
				blockLi.removeClass("active");
				return;
			}

			if (filter == "module" && modules.indexOf(blockLi.data("module")) < 0) {
				blockLi.removeClass("active");
				return;
			}

			blockLi.addClass("active");
		});
	}

	function onGroupHeaderClick(e) {
		console.log(1)
		var group = $(this).parent().parent();
		group.toggleClass("active");

		var blockDom = $(".group-extension > .block");
		var block = softwareModel.getBlock(blockDom.data("uid"));
		block.setConnectable(group.hasClass("active"));
	}

	return {
		init: init,
		loadSchema: loadSchema,
		getData: getData,
		setData: setData,
		reset: reset,

		getCode: getCode,
		updateBlocks: updateBlocks,
	};
});