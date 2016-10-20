/**
 * Created by pengfei on 2016/10/17.
 */
$('#tab-1').click(function () {
    $('#tab-1').css('background', '#258ec8');
    $('#tab-2').css('background', '');
    $('#tab-3').css('background', '');
    $('#page1').css('display', 'block');
    $('#page2').css('display', 'none');
    $('#page3').css('display', 'none');
});


$('#tab-2').click(function () {
    $('#tab-1').css('background', '');
    $('#tab-2').css('background', '#258ec8');
    $('#tab-3').css('background', '');
    $('#page1').css('display', 'none');
    $('#page2').css('display', 'block');
    $('#page3').css('display', 'none');
});

$('#tab-3').click(function () {
    $('#tab-1').css('background', '');
    $('#tab-2').css('background', '');
    $('#tab-3').css('background', '#258ec8');
    $('#page1').css('display', 'none');
    $('#page2').css('display', 'none');
    $('#page3').css('display', 'block');
});
