var show_num = 0 ;

$('#btn1').click(run1)
$('#btn2').click(run2);
$('#btn3').click(run3);
$('#btn4').click(run4);
$('#btn5').click(run5);

function run1(){
	$('#btn1').css('opacity', '1');
	$('#btn2').css('opacity', '0.5');
	$('#btn3').css('opacity', '0.5');
	$('#btn4').css('opacity', '0.5');
	$('#btn5').css('opacity', '0.5');
	$('#pic1').css('display', 'block');
	$('#pic2').css('display', 'none');
	$('#pic3').css('display', 'none');
	$('#pic4').css('display', 'none');
	$('#pic5').css('display', 'none');
	show_num = 0 ;
}
function run2() {
    $('#btn1').css('opacity', '0.5');
	$('#btn2').css('opacity', '1');
	$('#btn3').css('opacity', '0.5');
	$('#btn4').css('opacity', '0.5');
	$('#btn5').css('opacity', '0.5');
	$('#pic1').css('display', 'none');
	$('#pic2').css('display', 'block');
	$('#pic3').css('display', 'none');
	$('#pic4').css('display', 'none');
	$('#pic5').css('display', 'none');
	show_num = 1 ;
}
function run3() {
    $('#btn1').css('opacity', '0.5');
	$('#btn2').css('opacity', '0.5');
	$('#btn3').css('opacity', '1');
	$('#btn4').css('opacity', '0.5');
	$('#btn5').css('opacity', '0.5');
	$('#pic1').css('display', 'none');
	$('#pic2').css('display', 'none');
	$('#pic3').css('display', 'block');
	$('#pic4').css('display', 'none');
	$('#pic5').css('display', 'none');
	show_num = 2 ;
}
function run4() {
    $('#btn1').css('opacity', '0.5');
	$('#btn2').css('opacity', '0.5');
	$('#btn3').css('opacity', '0.5');
	$('#btn4').css('opacity', '1');
	$('#btn5').css('opacity', '0.5');
	$('#pic1').css('display', 'none');
	$('#pic2').css('display', 'none');
	$('#pic3').css('display', 'none');
	$('#pic4').css('display', 'block');
	$('#pic5').css('display', 'none');
	show_num = 3 ;
}
function run5() {
    $('#btn1').css('opacity', '0.5');
	$('#btn2').css('opacity', '0.5');
	$('#btn3').css('opacity', '0.5');
	$('#btn4').css('opacity', '0.5');
	$('#btn5').css('opacity', '1');
	$('#pic1').css('display', 'none');
	$('#pic2').css('display', 'none');
	$('#pic3').css('display', 'none');
	$('#pic4').css('display', 'none');
	$('#pic5').css('display', 'block');
	show_num = 4 ;
}



setInterval(function() {
	if (show_num == 0) {
		run2();
	} else if (show_num == 1) {
		run3();
	}else if (show_num == 2) {
		run4();
	}else if (show_num == 3) {
		run5();
	}else if (show_num == 4) {
		run1();
	}
}, 3000);













