// docuemnt ready
$(document).ready(function() {
	// show about modal
	$('.menu-toggle').bind('click', function(e){
		$('#projectModal').modal('show');
	});
	// show contact modal
	$('.about-info').bind('click', function(e){
		$('#aboutModal').modal('show');
	});
	// show contact modal
	$('.contact-info').bind('click', function(e){
		$('#contactModal').modal('show');
	});
	// toggle controls
	$('.control-box, .indicator').bind('click', function(){
		setTimeout(setPosition, 750);
		// reset active to default position
		$('.flex-container').each( function( i, flexContainer ) {
			var $flexContainer = $( flexContainer );
			$flexContainer.find('.active').removeClass('active');
			$('.flex_item:first-child').addClass('active');
		});
	});
	// add !
	$('.thank').click(function(){
		$('.info').after('!');
	});
	// call the animsition
	$(".animsition").animsition({
		inClass               :   'fade-in',
		outClass              :   'fade-out',
		inDuration            :    1500,
		outDuration           :    800,
		linkElement           :   '.animsition-link',
		// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
		loading               :    true,
		loadingParentElement  :   'body', //animsition wrapper element
		loadingClass          :   'animsition-loading',
		unSupportCss          : [ 'animation-duration',
		                          '-webkit-animation-duration',
		                          '-o-animation-duration'
		                        ],
		//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

		overlay               :   false,

		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'
	  });

});

// test log
console.log(greeting);
