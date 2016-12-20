
$('.content-region').mouseover(function() {
	var a = $('.blocks li:nth(88)')
	a.css('display', 'none');
	qwe0();

	function qwe0() {
		$('.component').css({
			"width": "150px",
			"height": "150px",
			"transform": "translate(-0%, -0%)"
		});
	}



	qwe();

	function qwe() {
		$('.pin-PD1').css('display', 'none');
		$('.pin-PD4').css('display', 'block');
		if ($('.pin-PD4').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD6').css('display', 'none');
		} else {
			$('.pin-PD6').css('display', 'block');
		}
	}

	qwe1();

	function qwe1() {
		if ($('.pin-PD2').hasClass('jsplumb-endpoint-full')) {
			$('.pin-8').css('display', 'none');
			$('.pin-9').css('display', 'none');
		} else {
			$('.pin-8').css('display', 'block');
			$('.pin-9').css('display', 'block');
		}
	}

	runa0();

	function runa0() {
		if ($('.pin-A0').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PA1').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			runa2();
		} else {
			$('.pin-PA1').css('display', 'block');
			$('.pin-PA3').css('display', 'block');
			runa1()
		}
	}

	function runa1() {
		if ($('.pin-A1').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PA1').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			runa4();
		} else {
			$('.pin-PA1').css('display', 'block');
			$('.pin-PA3').css('display', 'block');
			runa6();
		}
	}

	function runa2() {
		if ($('.pin-A2').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PA2').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			acc1();
		} else {
			$('.pin-PA2').css('display', 'block');
			$('.pin-PA3').css('display', 'none');
			runa3()
		}
	}

	function runa3() {
		if ($('.pin-A3').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PA2').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			acc1();
		} else {
			$('.pin-PA2').css('display', 'block');
			$('.pin-PA3').css('display', 'none');
		}
	}

	function runa4() {
		if ($('.pin-A2').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PA2').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			acc1();
		} else {
			$('.pin-PA2').css('display', 'block');
			$('.pin-PA3').css('display', 'none');
			runa5()
		}
	}

	function runa5() {
		if ($('.pin-A3').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PA2').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			acc1();
		} else {
			$('.pin-PA2').css('display', 'block');
			$('.pin-PA3').css('display', 'none');
			acc1();
		}
	}

	function runa6() {
		if ($('.pin-A2').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PA2').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			acc1();
		} else {
			$('.pin-PA2').css('display', 'block');
			$('.pin-PA3').css('display', 'block');
			runa7()
		}
	}

	function runa7() {
		if ($('.pin-A3').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PA2').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			acc1();
		} else {
			$('.pin-PA2').css('display', 'block');
			$('.pin-PA3').css('display', 'block');
			run8();
		}
	}

	function run8() {
		if ($('.pin-PA1').hasClass('jsplumb-endpoint-full')) {
			$('.pin-A0').css('display', 'none');
			$('.pin-A1').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			run9();
		} else {
			$('.pin-A0').css('display', 'block');
			$('.pin-A1').css('display', 'block');
			$('.pin-PA3').css('display', 'block');
			run10()
		}
	}

	function run9() {
		if ($('.pin-PA2').hasClass('jsplumb-endpoint-full')) {
			$('.pin-A2').css('display', 'none');
			$('.pin-A3').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			acc1();
		} else {
			$('.pin-A2').css('display', 'block');
			$('.pin-A3').css('display', 'block');
			$('.pin-PA3').css('display', 'none');
			acc1();
		}
	}

	function run10() {
		if ($('.pin-PA2').hasClass('jsplumb-endpoint-full')) {
			$('.pin-A2').css('display', 'none');
			$('.pin-A3').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
			acc1();
		} else {
			$('.pin-A2').css('display', 'block');
			$('.pin-A3').css('display', 'block');
			$('.pin-PA3').css('display', 'block');
			run11();
		}
	}

	function run11() {
		if ($('.pin-PA3').hasClass('jsplumb-endpoint-full')) {
			$('.pin-A0').css('display', 'none');
			$('.pin-A1').css('display', 'none');
			$('.pin-A2').css('display', 'none');
			$('.pin-A3').css('display', 'none');
			$('.pin-PA1').css('display', 'none');
			$('.pin-PA2').css('display', 'none');
			acc1();
		} else {
			$('.pin-A0').css('display', 'block');
			$('.pin-A1').css('display', 'block');
			$('.pin-A2').css('display', 'block');
			$('.pin-A3').css('display', 'block');
			$('.pin-PA1').css('display', 'block');
			$('.pin-PA2').css('display', 'block');
			acc1();
		}
	}

	function acc1() {
		if ($('.pin-10').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD3').css('display', 'none');
			$('.pin-PD6').css('display', 'none');
			qqq1();
		} else {
			$('.pin-PD3').css('display', 'block');
			$('.pin-PD6').css('display', 'block');
			acc2();
		}
	}

	function acc2() {
		if ($('.pin-11').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD3').css('display', 'none');
			$('.pin-PD6').css('display', 'none');
			qqq1();
		} else {
			$('.pin-PD3').css('display', 'block');
			$('.pin-PD6').css('display', 'block');
			acc3()
		}
	}

	function acc3() {
		if ($('.pin-PD3').hasClass('jsplumb-endpoint-full')) {
			$('.pin-10').css('display', 'none');
			$('.pin-11').css('display', 'none');
			$('.pin-PD6').css('display', 'none');
			qwez();
			qqq1();
		} else {
			$('.pin-10').css('display', 'block');
			$('.pin-11').css('display', 'block');
			$('.pin-PD6').css('display', 'block');
			acc4();
		}
	}

	function acc4() {
		if ($('.pin-PD6').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD3').css('display', 'none');
			$('.pin-PD4').css('display', 'none');
			$('.pin-10').css('display', 'none');
			$('.pin-11').css('display', 'none');
			qqq0();
		} else {
			$('.pin-PD4').css('display', 'block');
			$('.pin-PD3').css('display', 'block');
			$('.pin-10').css('display', 'block');
			$('.pin-11').css('display', 'block');
			qqq0();
		}
	}

	function qqq0() {
		if ($('.pin-2').hasClass('jsplumb-endpoint-full')) {
			$('.pin-IICINT').css('display', 'none');
			$('.pin-PD1').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
			qwez();
			qqq2();
		} else {
			$('.pin-PD1').css('display', 'block');
			$('.pin-PD5').css('display', 'block');
			$('.pin-IICINT').css('display', 'block');
			qqq1();
			www();
		}
	}

	function qqq1() {
		if ($('.pin-3').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD1').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
			qqq4();
		} else {
			$('.pin-PD1').css('display', 'block');
			$('.pin-PD5').css('display', 'block');
			qqq6();
		}
	}

	function qqq2() {
		if ($('.pin-8').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD2').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
		} else {
			$('.pin-PD2').css('display', 'block');
			$('.pin-PD5').css('display', 'none');
			qqq3()
		}
	}

	function qqq3() {
		if ($('.pin-9').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD2').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
		} else {
			$('.pin-PD2').css('display', 'block');
			$('.pin-PD5').css('display', 'none');
		}
	}

	function qqq4() {
		if ($('.pin-8').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD2').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
		} else {
			$('.pin-PD2').css('display', 'block');
			$('.pin-PD5').css('display', 'none');
			qqq5()
		}
	}

	function qqq5() {
		if ($('.pin-9').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD2').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
		} else {
			$('.pin-PD2').css('display', 'block');
			$('.pin-PD5').css('display', 'none');
		}
	}

	function qqq6() {
		if ($('.pin-8').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD2').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
		} else {
			$('.pin-PD2').css('display', 'block');
			$('.pin-PD5').css('display', 'block');
			qqq7()
		}
	}

	function qqq7() {
		if ($('.pin-9').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD2').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
		} else {
			$('.pin-PD2').css('display', 'block');
			$('.pin-PD5').css('display', 'block');
			qqq8();
		}
	}

	function qqq8() {
		if ($('.pin-PD1').hasClass('jsplumb-endpoint-full')) {
			$('.pin-2').css('display', 'none');
			$('.pin-3').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
			qqq9();
		} else {
			$('.pin-2').css('display', 'block');
			$('.pin-3').css('display', 'block');
			$('.pin-PD5').css('display', 'block');
			qqq10()
		}
	}

	function qqq9() {
		if ($('.pin-PD2').hasClass('jsplumb-endpoint-full')) {
			$('.pin-8').css('display', 'none');
			$('.pin-9').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
		} else {
			$('.pin-8').css('display', 'block');
			$('.pin-9').css('display', 'block');
			$('.pin-PD5').css('display', 'none');
		}
	}

	function qqq10() {
		if ($('.pin-PD2').hasClass('jsplumb-endpoint-full')) {
			$('.pin-8').css('display', 'none');
			$('.pin-9').css('display', 'none');
			$('.pin-PD5').css('display', 'none');
		} else {
			$('.pin-8').css('display', 'block');
			$('.pin-9').css('display', 'block');
			$('.pin-PD5').css('display', 'block');
			qqq11();
		}
	}

	function qqq11() {
		if ($('.pin-PD5').hasClass('jsplumb-endpoint-full')) {
			$('.pin-2').css('display', 'none');
			$('.pin-3').css('display', 'none');
			$('.pin-8').css('display', 'none');
			$('.pin-9').css('display', 'none');
			$('.pin-PD1').css('display', 'none');
			$('.pin-PD2').css('display', 'none');
		} else {
			$('.pin-2').css('display', 'block');
			$('.pin-3').css('display', 'block');
			$('.pin-8').css('display', 'block');
			$('.pin-9').css('display', 'block');
			$('.pin-PD1').css('display', 'block');
			$('.pin-PD2').css('display', 'block');
			www()
		}
	}

	function www() {
		if ($('.pin-IICINT').hasClass('jsplumb-endpoint-full')) {
			$('.pin-2').css('display', 'none');
		} else {
			$('.pin-2').css('display', 'block');
		}
	}

	runadd1();

	function runadd1() {
		if ($('.pin-PD1').hasClass('jsplumb-endpoint-full')) {
			$('.pin-2').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
		} else {
			$('.pin-PA1').css('display', 'block');
			$('.pin-PA3').css('display', 'block');
		}
	}
	runadd2();

	function runadd2() {
		if ($('.pin-PD5').hasClass('jsplumb-endpoint-full')) {
			$('.pin-2').css('display', 'none');
			$('.pin-PA3').css('display', 'none');
		} else {
			$('.pin-PA1').css('display', 'block');
			$('.pin-PA3').css('display', 'block');
		}
	}
	runadd3();

	function runadd3() {
		if ($('.pin-PD4').hasClass('jsplumb-endpoint-full')) {
			$('.pin-PD6').css('display', 'none');
		} else {
			$('.pin-PD6').css('display', 'block');
		}
	}

	showLEDhide();

	function showLEDhide() {
		$('.blocks li:nth(20)').addClass('ad')
		if ($('.blocks li:nth(20)').hasClass('active')) {
			showLed();
		}
	}

	function showLed() {
		if ($('.tab-software .filters-wrap').find('.filters li:nth-child(1)').hasClass('active')) {
			runadd4();
		} else {
			$('.blocks li:nth(88)').css('display', 'none');
		}
	}

	function runadd4() {
		if ($('.pin-3').hasClass('jsplumb-endpoint-full') || $('.pin-9').hasClass('jsplumb-endpoint-full') || $('.pin-10').hasClass('jsplumb-endpoint-full') || $('.pin-11').hasClass('jsplumb-endpoint-full')) {
			$('.blocks li:nth(88)').css('display', 'block');
			runadd5();
		} else {
			$('.blocks li:nth(88)').css('display', 'none');
		}
	}

	function runadd5() {
		if ($('.tab-software .filters-wrap').find('.filters li:nth-child(1)').hasClass('active')) {
			$('.blocks li:nth(88)').css('display', 'block');
		} else {
			$('.blocks li:nth(88)').css('display', 'none');
		}
	}

	qwez();

	function qwez() {
		if($('.pin-2').hasClass('jsplumb-endpoint-full')){
			console.log(1)
			$('.pin-PD1').css('display', 'none');
		}
	}

});