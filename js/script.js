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


	//main slider in
	var mySwiper = new Swiper('.main-slider', {
	    speed: 400,
	   	 autoplay: {
		    delay: 5000
		 },
		 navigation: {
		    nextEl: '.button-next',
		    prevEl: '.button-prev',
		 },
	});

//product slider initialization
	var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 20,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-product', {
      spaceBetween: 10,

      thumbs: {
        swiper: galleryThumbs
      }
    });

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })


});
