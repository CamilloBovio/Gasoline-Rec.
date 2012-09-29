(function ($) {
  $(document).ready(function(){
    //OPACITA' IMMAGINI AL MOUSEHOVER
    
    $('a').hover(function(){
		$(this).find('img').stop().animate({opacity : 0.7},250);
		//$(this).find('img').append('<div class="blockHover"></div>');
	}, function() {
		$(this).find('img').stop().animate({opacity : 1},250);
		//$('.blockHover').remove();
	});
	
	
	
	//SLIDESHOW HOME
	$('.slideHover').css({opacity:'0'});
	
	$('.slideHover').hover(function(){
		$(this).stop().animate({opacity:0.9},150);
	}, function(){
		$(this).stop().animate({opacity:0},150);
	});
	
	
	//BLOCKS ARTISTS - RELEASES - HOME
	
	$('a').hover(function(){
		$(this).find('h3').stop().animate({color: '#00cccc'},150);
	}, function(){
		$(this).find('h3').stop().animate({color: '#111111'},150);
	});
	

  });//DOCUMENT.READY CLOSING
  
})(jQuery);