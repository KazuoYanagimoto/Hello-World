var $container = $('.isotope');
var greeting = 'hello world!';
var body = $('body');
var navbar = $('.navbar');
var main = $('.main');
var mainContainer = $('.main-container');
var isotope = $('.isotope');
var flexContainer = $('.flex-container');
var sortBy = $('.menu-sort');
var item = $('.element-item');
var footer = $('.footer');
var lastChild = $('.element-item:last');
var controlBox = $('.control-box');
var controlLeft = $('#control-left');
var controlRight = $('#control-right');
var firstSlide = $('#first-slide');
var secondSlide = $('#second-slide');
var thirdSlide = $('#third-slide');
var firstIndicator = $('#first-indicator');
var secondIndicator = $('#second-indicator');
var thirdIndicator = $('#third-indicator');
var menuFilter = $('.menu-filter');
var menuSort = $('.menu-sort');
var startBtn = $('.btn-start');
var iconContainer = $('.carousel .icon-container');
var btnPrimary = $('.btn-primary');
var caption = $('.carousel-caption');

// set position depends on active class
function setPosition(){
	clearShuffle();
	// reset controls
	menuFilter.css({'left': '-25%'});
	menuSort.css({'right': '-25%'});
	// check active class
	if(firstSlide.hasClass('active')){
		// set first position
		menuFilter.css({'left': '0'});
		body.css({'left': '25%'});
		isotope.css({'margin': '0 25% 150px 0'});
	} else if(secondSlide.hasClass('active')){
		// set default position
		body.css({'left': '0', 'right': '0'});
		isotope.css({'margin': '0 5% 150px'});
		startInterval();
	} else if(thirdSlide.hasClass('active')){
		// set third position
		menuSort.css({'right': '0'});
		body.css({'left': '0'});
		isotope.css({'margin': '0 25% 150px 5%'});
	}
	setTimeout(resetItems, 750);
}
// hide items
function hideItem(){
	item.css({'display': 'none'});
}
// display navbar
function displayNavbar(){
	$('.navbar').slideDown(1500);
}
// display main
function displayMain(){
	main.show();
}
// display main-container
function displayContainer(){
	mainContainer.fadeIn(1500);
}
// display item
function displayIsotope(){
	isotope.show().promise().done(function(){
		setTimeout(originalOrder, 500);
	});
}
// display item
function displayItem(){
	item.show(500).promise().done(function(){
		setTimeout(originalOrder, 1500);
	});
}
function changeColor(){
	item.css({'border': '1px solid #1d4cff'}).hover(function(){
		$(this).css({'border-color': '#9db1ff'});
	}, function(){
		$(this).css({'border-color': '#1d4cff'});
	});
}
function shuffleItem(){
	$container.isotope('shuffle');
}
// shuffle element
function shuffleElement(){
	item.css({'border': '2px solid #9db1ff'});
	setTimeout(shuffleItem, 500);
	setTimeout(changeColor, 1500);
}
// original order
function originalOrder(){
	$container.isotope({ sortBy: 'original-order' });
}
// show all items
function showAllItems(){
	$container.isotope({ filter: '*' });
}
// reset to default position
function resetItems(){
	$container.isotope({ filter: '*', sortBy: 'original-order' });
}
// first function call
hideItem();
// intervals
var setTimer;
function startInterval(){
	setTimer = setInterval(shuffleElement, 30000);
	console.log('start interval');
}
function clearShuffle(){
	clearInterval(setTimer);
	console.log('clear interval');
}
// trigger initial
function triggerAll(){
	setTimeout(displayContainer, 1500);
	setTimeout(displayItem, 3000);
	setTimeout(startInterval, 4500);
	// setInterval(shuffleElement, 60000);
}
// addEventListener
