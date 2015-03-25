// Isotope
$( function() {
	var $container = $('.isotope').isotope({
		itemSelector: '.element-item',
		layoutMode: 'masonry',
		transitionDuration: '0.7s',
		getSortData: {
			name: '.name',
			symbol: '.symbol',
			number: '.number parseInt',
			category: '[data-category]',
			weight: function( itemElem ) {
				var weight = $( itemElem ).find('.weight').text();
				return parseFloat( weight.replace( /[\(\)]/g, '') );
			}
		},
		hiddenStyle: {
			opacity: 0
		},
		visibleStyle: {
			opacity: 1
		}
	});

	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt( number, 10 ) > 50;
		},
		// show if name ends with -ium
		ium: function() {
			var name = $(this).find('.name').text();
			return name.match( /ium$/ );
		}
	};

	// bind filter button click
	$('#filters').on( 'click', 'div', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$container.isotope({ filter: filterValue });
	});

	// bind sort button click
	$('#sorts').on( 'click', 'div', function() {
		var sortByValue = $(this).attr('data-sort-by');
		$container.isotope({ sortBy: sortByValue });
	});

	// change is-checked class on buttons
	$('.flex-container').each( function( i, flexContainer ) {
		var $flexContainer = $( flexContainer );
		$flexContainer.on( 'click', 'div', function() {
			$flexContainer.find('.active').removeClass('active');
			$( this ).addClass('active');
		});
	});

});

// Bootstrap
(function( $ ) {
	// Initialize tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// remove interval
	$('.carousel').carousel({
		interval: false
	});

	//Function to animate slider captions
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}

	//Variables on page load
	var $myCarousel = $('#carousel-about-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

	//Initialize carousel
	$myCarousel.carousel();

	//Animate captions in first slide on page load
	doAnimations($firstAnimatingElems);

	//Pause carousel
	$myCarousel.carousel('pause');


	//Other slides to be animated on carousel slide event
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});

	// This event is fired when the modal has finished being hidden
	$('#welcomeModal').on('hidden.bs.modal', function (e) {
		triggerAll();
	});

})(jQuery);

// init function
(function(){
	// set target _blank
	var b = document.createElement('base');
			b.target = "_blank";
			document.head.appendChild(b);
	// scroll event
	$(window).scroll(function(event) {
		var scroll = $('.scroll');
		var scroll_pos = $(window).scrollTop();
		var inner_height = window.innerHeight;
		var document_height = $(document).height();
		var speed = 500;
		if(scroll_pos >= (document_height - inner_height)){
			flexContainer.css({'padding-bottom': '50px'})
			scroll.show(speed);
		} else {
			flexContainer.css({'padding-bottom': '0'})
			scroll.hide(speed);
		}
	});

})();
