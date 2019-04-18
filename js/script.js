jQuery(document).ready(function (){
	$('.login1').click(function(){
		$('.popup-wrapper').fadeIn();
	});

	$('.close').click(function(){
		$('.popup-wrapper').fadeOut();
	});


	$('.mobile-menu').click(function(){
		$('.navigation ul').toggleClass('active');
	});

});
