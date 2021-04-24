$.fn.maps = function (_0x2091x1) {
	var options = { speed : 300 };
	$.extend (options, _0x2091x1);
	var is_open = 0;
	var is_768 = 0;
	$ (".venus-menu").find ("li").each (function () {
		if ($ (this).children("ul").length > 0) {
			$ (this).append("<span class='indicator'>+</span>");
		};
	});
	$ (".venus-menu").prepend("<li class='showhide'>Menu <span class='glyphicon glyphicon-menu-hamburger'></span></li>");
	howwidth();
	$ (window).resize(function () {
		howwidth();
	});

	function howwidth() {
		if (window.innerWidth<= 768) {
			if(is_768==0){
				$ (".venus-menu").find("li, a, span").unbind();
				$ (".venus-menu").find("ul").hide(0);
				goto_s();
				if (is_open == 0) {
					$ (".venus-menu > li:not(.showhide)").hide(0);
				};
				is_768=1;
			}
		} else {
			$ (".venus-menu").find("li, a, span").unbind();
			$ (".venus-menu").find("ul").hide(0);
			goto_l();
		};
		if(!$.support.leadingWhitespace){
			$ (".venus-menu").children("li").css("width",100/($ (".venus-menu").children("li").length-1)+"%");
		}
	};

	function goto_s() {
		$ (".venus-menu > li.showhide").show(0);
		$ (".venus-menu > li.showhide").bind("click", function () {
			if ($ (".venus-menu > li").is(":hidden")) {
				$ (".venus-menu > li").slideDown(300);
				is_open = 1;
			} else {
				$ (".venus-menu > li:not(.showhide)").slideUp(300);
				$ (".venus-menu > li.showhide").show(0);
				is_open = 0;
			};
		});

		$ (".venus-menu").find("ul").removeClass("zoom-out");
		$ (".venus-menu li:not(.showhide)").each(function () {
			if ($ (this).children("ul").length> 0) {
				$ (this).children("a").bind("click", function () {
					if ($ (this).siblings("ul").css("display") == "none") {
						$ (this).siblings("ul").slideDown(300).addClass("slide-left");
						is_open = 1;
					} else {
						$ (this).siblings("ul").slideUp(300).removeClass("slide-left");
					};
					return false;
				});
				$ (this).children(".indicator").bind("click", function () {
					if ($ (this).siblings("ul").css("display") == "none") {
						$ (this).siblings("ul").slideDown(300).addClass("slide-left");
						is_open = 1;
					} else {
						$ (this).siblings("ul").slideUp(300).removeClass("slide-left");
					};
				});
			};
		});
	};

	function goto_l() {
		$ (".venus-menu > li").show(0);
		$ (".venus-menu > li.showhide").hide(0);

		$ (".venus-menu").find("ul").removeClass("slide-left");
		$ (".venus-menu li").bind("mouseover", function () {
			$ (this).children("ul").stop(true, true).fadeIn(options.speed).addClass("zoom-out");
		}).bind("mouseleave", function () {
			$ (this).children("ul").stop(true, true).fadeOut(options.speed).removeClass("zoom-out");
		});
	};
};