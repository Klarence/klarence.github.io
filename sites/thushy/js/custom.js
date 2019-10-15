// function loadCss(filename) {
//     var l = document.createElement('link');
//     l.rel = 'stylesheet';
//     l.href = filename
//     var h = document.getElementsByTagName('head')[0];
//     h.parentNode.insertBefore(l, h);
// }
//
// function lazyCss() {
//     loadCss('css/lazy.css');
// }


function ReLoadImages(){
    $('img[data-lazysrc]').each( function(){
            //* set the img src from data-src
            $( this ).attr( 'src', $( this ).attr( 'data-lazysrc' ) );
        }
    );
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {  //or at "complete" if you want it to execute in the most last state of window.
        ReLoadImages();
    }
});

$( document ).ready(function() {

    // lazyCss();

    // Give the parameter a variable name
    var dynamicContent = getParameterByName('dc');
// Check if the URL parameter is apples
    if (dynamicContent === 'invited') {
        $('#invitedLink').show();
        $('#invitedContent').show();
    }

    /*------------------------------ Page Scrolling ----------------------*/

    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	/*------------------------------ Tooltips ----------------------*/

	$('.tooltips').tooltip();

	/*------------------------------ Voice Control -----------------*/
	// if (annyang) {
	//   var commands = {
	// 	'home': function() {
	// 		$('html, body').animate({
	// 			scrollTop: $("#page-top").offset().top
	// 		}, 2000);
	// 	},
    //
	// 	'about': function() {
	// 		$('html, body').animate({
	// 			scrollTop: $("#about").offset().top
	// 		}, 2000);
	// 	},
    //
	// 	'family': function() {
	// 		$('html, body').animate({
	// 			scrollTop: $("#family").offset().top
	// 		}, 2000);
	// 	},
    //
	// 	'moments': function() {
	// 		$('html, body').animate({
	// 			scrollTop: $("#moments").offset().top
	// 		}, 2000);
	// 	},
    //
	// 	'favourites': function() {
	// 		$('html, body').animate({
	// 			scrollTop: $("#favourites").offset().top
	// 		}, 2000);
	// 	},
    //
	// 	'blog': function() {
	// 		$('html, body').animate({
	// 			scrollTop: $("#blog").offset().top
	// 		}, 2000);
	// 	},
    //
	// 	'contact': function() {
	// 		$('html, body').animate({
	// 			scrollTop: $("#contactus").offset().top
	// 		}, 2000);
	// 	},
    //
	// 	'Purchase now': function() {
	// 		window.location = "http://www.themeforest.com"
	// 	}
    //
	//   };
    //
	//   annyang.addCommands(commands);
	//   annyang.start();
	// }

	/*------------------------------ Bootstrap Carousel ----------------------*/

	$('#myCarousel').carousel({
		// interval: 18000, //changes the speed
		interval: 9000, //changes the speed
		pause: "false"
	})
	//Bootstrap Carousel Progressbar

	$("#progressbar").progressbar({
		value: 1
	});
	$("#progressbar > .ui-progressbar-value").animate({
		width: "100%"
	}, 9000);

	$('#myCarousel').bind('slid.bs.carousel', function (e) {
			$("#progressbar > .ui-progressbar-value").finish();
			$("#progressbar > .ui-progressbar-value").animate({
			width: "0%"
			}, 0);
			$("#progressbar > .ui-progressbar-value").animate({
			width: "100%"
			}, 9000);
	});

	/*------------------------------ Masonry Blog -----------------*/

	// var $container = $('#blogs');
	// // initialize
	// $container.masonry({
	//   itemSelector: '.blog'
	// });
	// // initialize Masonry after all images have loaded
	// $container.imagesLoaded( function() {
	//   $container.masonry();
	// });

	/*------------------------------ OWL Carousel -----------------*/

	$("#owl-man-family").owlCarousel({
		items : 2,
		lazyLoad : true
	});

	$("#owl-woman-family").owlCarousel({
		items : 2,
		lazyLoad : true
	});

	$("#owl-moments").owlCarousel({
		items : 4,
		pagination : false,
		autoPlay : true,
		lazyLoad : true
	});

	$("#owl-common").owlCarousel({
		items : 3,
		lazyLoad : true
	});

	$("#owl-blog-post-gallery").owlCarousel({
		singleItem:true,
		autoPlay : true,
		lazyLoad : true
	});

	/*------------------------------ Sticky Navigation -----------------*/

	$(".topbar-nav").sticky({topSpacing:0});

	/*------------------------------ Magnific POP -----------------*/

	$('.popup-vimeo').magnificPopup({
		type: 'iframe'
	});
	$('.popup-image').magnificPopup({
	  type: 'image',
	  removalDelay: 500, //delay removal by X to allow out-animation
	  callbacks: {
		beforeOpen: function() {
		  // just a hack that adds mfp-anim class to markup
		   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		   this.st.mainClass = this.st.el.attr('data-effect');
		}
	  },
	  closeOnContentClick: true,
	  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});

	/*------------------------------ Waypoint Counting -----------------*/

	$('#startcounting').waypoint(function() {
		$('.counts').countTo();
		$('#startcounting').waypoint('disable');
	});

	/*------------------------------ Parallax Effect -----------------*/

	$('.parallax-section').each(function(){
		$(this).parallax("50%", 0.5);
	});

	/*------------------------------ WOW Script ----------------------*/

	new WOW().init();

	/*------------------------------ Twitter Feeds -----------------*/

    // $(".footer-tweet").tweet({
	// 	join_text: false,
	// 	username: "envato", // Username
	// 	modpath: "./js/twitter/",
	// 	avatar_size: false,
	// 	count: 3,
	// 	template: "{text} <br> {time}",
	// 	loading_text: "loading twitter feed...",
	// 	seconds_ago_text: "%d seconds ago",
	// 	a_minutes_ago_text: "a minute ago",
	// 	minutes_ago_text: "%d minutes ago",
	// 	a_hours_ago_text: "an hour ago",
	// 	hours_ago_text: "%d hours ago",
	// 	a_day_ago_text: "a day ago",
	// 	days_ago_text: "%d days ago",
	// 	view_text: "view tweet on twitter"
	// });
    //
	// $(".footer-tweet ul").owlCarousel({singleItem : true,});

	/*------------------------------ Ajax Contact Form -----------------*/

	// $("#submit").click(function(){
	// 	var data = $("#contact").serialize();
	// 	$.ajax({
	// 		type	: "POST",
	// 		url 	: "ajax/sendemail.php",
	// 		data 	: data,
	// 		success : function(q)
	// 			{
	// 			$("#ContactFormDiv").html(q);
	// 			}
	// 		});
	// 	return false;
	// });
	// return false;

});


/*------------------------------ Count Up ----------------------*/

setInterval(function() {
    var timespan = countdown(new Date("04/09/2020"), new Date());
    var div = document.getElementById('time');
    // div.innerHTML = "<div><span>Years</span>" + timespan.years + "</div>" + "<div><span>Months</span>" + timespan.months + "</div>" + "<div><span>Days</span>" + timespan.days + "</div>" + "<div><span>Hours</span>" + timespan.hours + "</div>" + "<div><span>Minutes</span>" + timespan.minutes + "</div>" + "<div><span>Seconds</span>" + timespan.seconds + "</div>"
    div.innerHTML = "<div><span>Months</span>" + timespan.months + "</div>" + "<div><span>Days</span>" + timespan.days + "</div>" + "<div><span>Hours</span>" + timespan.hours + "</div>"
    // div.innerHTML = "<div><span>Months</span>" + timespan.months + "</div>" + "<div><span>Days</span>" + timespan.days + "</div>"
}, 1000);

/*------------------------------ Tooltips ----------------------*/

$.widget.bridge('uitooltip', $.ui.tooltip); // Resolve name collision between jQuery UI and Bootstrap

/*------------------------------ Preloader ----------------------*/

$(window).load(function() {
	$('.spinner').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({'overflow':'visible'});
});

/*------------------------------ Collapse the navbar on scroll ----------------------*/

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/*------------------------------ Background Video ----------------------*/

document.getElementById("bgvideo").width=document.body.offsetWidth;

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-123', 'auto');
  ga('send', 'pageview');

/*------------------------------ Background Video ----------------------*/

// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
