$(function(){function s(){$("#btn1").css("opacity","1"),$("#btn2").css("opacity","0.5"),$("#btn3").css("opacity","0.5"),$("#btn4").css("opacity","0.5"),$("#btn5").css("opacity","0.5"),$("#pic1").css("display","block"),$("#pic2").css("display","none"),$("#pic3").css("display","none"),$("#pic4").css("display","none"),$("#pic5").css("display","none"),t=0}function c(){$("#btn1").css("opacity","0.5"),$("#btn2").css("opacity","1"),$("#btn3").css("opacity","0.5"),$("#btn4").css("opacity","0.5"),$("#btn5").css("opacity","0.5"),$("#pic1").css("display","none"),$("#pic2").css("display","block"),$("#pic3").css("display","none"),$("#pic4").css("display","none"),$("#pic5").css("display","none"),t=1}function i(){$("#btn1").css("opacity","0.5"),$("#btn2").css("opacity","0.5"),$("#btn3").css("opacity","1"),$("#btn4").css("opacity","0.5"),$("#btn5").css("opacity","0.5"),$("#pic1").css("display","none"),$("#pic2").css("display","none"),$("#pic3").css("display","block"),$("#pic4").css("display","none"),$("#pic5").css("display","none"),t=2}function n(){$("#btn1").css("opacity","0.5"),$("#btn2").css("opacity","0.5"),$("#btn3").css("opacity","0.5"),$("#btn4").css("opacity","1"),$("#btn5").css("opacity","0.5"),$("#pic1").css("display","none"),$("#pic2").css("display","none"),$("#pic3").css("display","none"),$("#pic4").css("display","block"),$("#pic5").css("display","none"),t=3}function p(){$("#btn1").css("opacity","0.5"),$("#btn2").css("opacity","0.5"),$("#btn3").css("opacity","0.5"),$("#btn4").css("opacity","0.5"),$("#btn5").css("opacity","1"),$("#pic1").css("display","none"),$("#pic2").css("display","none"),$("#pic3").css("display","none"),$("#pic4").css("display","none"),$("#pic5").css("display","block"),t=4}var t=0;$("#btn1").click(s),$("#btn2").click(c),$("#btn3").click(i),$("#btn4").click(n),$("#btn5").click(p),setInterval(function(){0==t?c():1==t?i():2==t?n():3==t?p():4==t&&s()},3e3)});