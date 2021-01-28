/*global window $*/
/*=========================================
            Navigation  show/hide transparent black navigation
=========================================*/
$(function () {
	"use strict";
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			//                    hide nav
			$("nav").removeClass("vesco-top-nav");
			$("#back-to-top").fadeOut();
		} else {
			//            show nav
			$("nav").addClass("vesco-top-nav");
			$("#back-to-top").fadeIn();
		}
	});
});
//smoothscroll line
$(function () {
	"use strict";
	$("a.smooth-scroll").click(function (event) {
		event.preventDefault();
		//        get/return id like #about, #work, #services ...
		var section = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");
	});
});
//close mobile menu on click
$(function () {
	"use strict";
	$(".navbar-collapse ul li a").on("click launch", function () {
		$(".navbar-toggle").click();
	});

});
/*==================================
            SERVICES
==================================*/
/* document.readt method*/
//$(function () {
//    "use strict";
//    new WOW().init();
//});
/*==================================
            work
==================================*/

$(function () {
	"use strict";

	$("#work").magnificPopup({
		delegate: 'a', // child item selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		}
	});

});
/*==================================
            Team
==================================*/
$(function () {
	"use strict";
	$('#team-members').owlCarousel({
		item: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1
			},
			// breakpoint from 480 up
			480: {
				items: 2
			},
			// breakpoint from 768 up
			768: {
				items: 3
			}
		}

	});

});
/*==================================
            Testimonials
==================================*/
$(function () {
	"use strict";

	$('#customers-testimonials').owlCarousel({
		items: 1,
		singleItem: true,
		autoplay: true,
		smartspeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});
/*==================================
            Stats
==================================*/
$(function () {
	"use strict";
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

});
/*=========================================
            Clients
==========================================*/
$(function () {
	"use strict";
	$('#clients-list').owlCarousel({
		items: 6,
		singleItem: true,
		autoplay: true,
		smartspeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1
			},
			// breakpoint from 480 up
			480: {
				items: 3
			},
			// breakpoint from 768 up
			768: {
				items: 5
			},
			// breakpoint from 992 up
			992: {
				items: 6
			}
		}

	});

});