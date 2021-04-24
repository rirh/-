function spimg(obj,b){
	var w=0;
 	var h=0;
	var w2=0;
 	var h2=0;
 	$(obj).find("img").load(function(){
		if($(this).parent()[0].tagName.toLowerCase()=="a"){
			$(this).parent().parent().css({"overflow":"hidden"});
			$(this).parent().parent().parent().css({"height":$(this).parent().parent().parent().height()});
		}else{
			$(this).parent().css({"overflow":"hidden"});
			$(this).parent().parent().css({"height":$(this).parent().parent().height()});
		}
 	});
 	$(obj).find("img").hover(function(){
 		if($(this).attr("w")){
 			w=$(this).attr("w");
 		}else{
 			w=$(this).width();
 			$(this).attr("w",w);
 		}
 		if($(this).attr("h")){
 			h=$(this).attr("h");
 		}else{
 			h=$(this).height();
 			$(this).attr("h",h);
 		}
		w2=w*(1+b);
		h2=h*(1+b);
 		if($(this).attr("hover")!=1){
	 		$(this).attr("hover",1);
			//$(this).parent().css({"overflow":"hidden"});
			$(this).css({"z-index":2,"max-width":"120%"});
			$(this).stop().animate({"width":w2,"height":h2,"margin-left":-w*b/2,"margin-right":-w*b/2,"margin-top":-h*b/2,"margin-bottom":-h*b/2},function(){
			});
 		}
 	},function(){
		$(this).animate({"width":w,"height":h,"margin-left":0,"margin-right":0,"margin-top":0,"margin-bottom":0},function(){
			$(this).css({"max-width":"100%","z-index":1});
 			$(this).attr("hover",0);
		});
 	});
}

$.fn.p2s = function (p,s) {
	ck();
	$ (window).resize(function () {
		ck();
	});

	function ck() {
		var all=$(p).width();
		var one=0;
		$(p).find(s).each(function(){
			one=$(this).width();
		});
		var n=Math.floor(all/one);
		var i=0;
		$(p).find(s).each(function(){
			if(i>0&&i%n==0){
				$(this).css('clear','both');
			}else{
				$(this).css('clear','none');
			}
			i++;
		});
	};
};

$.fn.slideLeftHide = function( speed, callback ) { this.animate( { width: "hide", paddingLeft: "hide", paddingRight: "hide", marginLeft: "hide", marginRight: "hide" }, speed, callback ); }
$.fn.slideLeftShow = function( speed, callback ) { this.animate( { width: "show", paddingLeft: "show", paddingRight: "show", marginLeft: "show", marginRight: "show" }, speed, callback ); }

$(function(){
	var tn=0;
	$(".searchdiv").hover(function(){
		if(!tn){
			tn=1;
			$(this).addClass("searchdiv2");
			$(".sinput").stop().slideLeftShow(300);
		}
	},function(){
		$(".sinput").stop().slideLeftHide(300,function(){
			$(".searchdiv").removeClass("searchdiv2");
			tn=0;
		});
	});
	$(".searcha").click(function(){
		$(".searchdivxs").slideToggle();
	});

    $(".szmail").hide();
	$(".szline").hide();
	$(".szface").hide();
	$(".szgoogle").hide();
	$(".sztwitter").hide();
	$(".szmp").click(function(){
		if($(".szmail").css("display")=="none"){
			$(".szmail").fadeIn(100);
			$(".szline").fadeIn(300);
			$(".szface").fadeIn(400);
			$(".szgoogle").fadeIn(500);
			$(".sztwitter").fadeIn(600);
		}else{
			$(".szmail").fadeOut(50);
			$(".szline").fadeOut(100);
			$(".szface").fadeOut(150);
			$(".szgoogle").fadeOut(200);
			$(".sztwitter").fadeOut(250);
		}
	});
    $(".szlist").click(function(){
		$(".szmail").hide();
		$(".szline").hide();
		$(".szface").hide();
		$(".szgoogle").hide();
		$(".sztwitter").hide();
	});
	$(".szhide").click(function(){
		$("#szpop").fadeOut(50);
	});
	$("#my-menu").trigger("open");
	$("#my-menu").trigger("close");


    // $(".szcall").hide();
	// $(".szmsg").hide();
	// $(".szhide").hide();
	// $(".szlist").hide();
	// $(".szmp").click(function(){
	// 	if($(".szcall").css("display")=="none"){
	// 		$(".szcall").fadeIn(100);
	// 		$(".szmsg").fadeIn(300);
	// 		$(".szlist").fadeIn(400);
	// 		$(".szhide").fadeIn(500);
	// 	}else{
	// 		$(".szcall").fadeOut(50);
	// 		$(".szmsg").fadeOut(100);
	// 		$(".szlist").fadeOut(150);
	// 		$(".szhide").fadeOut(200);
	// 	}
	// });
    // $(".szlist").click(function(){
	// 	$(".szcall").hide();
	// 	$(".szmsg").hide();
	// 	$(".szhide").hide();
	// 	$(".szlist").hide();
	// });
	// $(".szhide").click(function(){
	// 	$("#szpop").fadeOut(50);
	// });
	// $("#my-menu").trigger("open");
	// $("#my-menu").trigger("close");



	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});

	$().maps();

 	$().p2s('.indexpro','.proh');

	//spimg(".indexconimg",0.05);
	//spimg(".proh",0.05);
});