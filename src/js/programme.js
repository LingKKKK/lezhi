/**
 * Created by pengfei on 2016/10/17.
 */

$('#tab-1').click(function () {
    $('#tab-1').css('background', '#258ec8');
    $('#tab-2').css('background', '');
    $('#tab-3').css('background', '');
    $('#page-one').css('display', 'none');
    $('#page-two').css('display', 'block');
    $('#page-three').css('display', 'none');
});

$('#tab-2').click(function () {
    $('#tab-1').css('background', '');
    $('#tab-2').css('background', '#258ec8');
    $('#tab-3').css('background', '');
    $('#page-one').css('display', 'block');
    $('#page-two').css('display', 'none');
    $('#page-three').css('display', 'none');
});

$('#tab-3').click(function () {
    $('#tab-1').css('background', '');
    $('#tab-2').css('background', '');
    $('#tab-3').css('background', '#258ec8');
    $('#page-one').css('display', 'none');
    $('#page-two').css('display', 'none');
    $('#page-three').css('display', 'block');
});