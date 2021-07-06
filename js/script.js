
// pre loader 
$(window).on("load", function() {

	$(".loader .inner").fadeOut(600, function() {
		$(".loader").fadeOut(500);
	});

})


// skill bar section
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},7000);
	});
});


$(document).ready(function() {

	var typed = new Typed(".typed", {
		strings: ["Front-End Developer.", "Web Application Developer.", "Student."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});



	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});

// jquery fancybox
	$("[data-fancybox]").fancybox();
	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

// jquery isotop
	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});


// navigation click smooth scroll
	$("#menu li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

});

// scroll bottom to top
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 500) { 
            $('#scrollTop').fadeIn(); 
        } else { 
            $('#scrollTop').fadeOut(); 
        } 
    }); 
    $('#scrollTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
});


// responsive menu toggle
$(document).ready(function(){
	$(".navbar-toggle").click(function(){
		$(".collapse").slideToggle();
	});
});


// jquery countUp js
(function($) {
 
    $.fn.countup = function(params) {
 		// make sure dependency is present
        if (typeof CountUp !== 'function') {
        	console.error('countUp.js is a required dependency of countUp-jquery.js.');
        	return;
        }

        var defaults = {
        	startVal: 0,
        	decimals: 0,
        	duration: 2,
        };

        if (typeof params === 'number') {
        	defaults.endVal = params;
        }
        else if (typeof params === 'object') {
        	$.extend(defaults, params);
        }
        else {
        	console.error('countUp-jquery requires its argument to be either an object or number');
        	return;
        } 

        this.each(function(i, elem) {
        	var countUp = new CountUp(elem, defaults.startVal, defaults.endVal, defaults.decimals, defaults.duration, defaults.options);

        	countUp.start();
        });



        return this;
 
    };
 
}(jQuery));







