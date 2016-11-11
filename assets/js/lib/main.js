$(document).ready(function(){

	// Add fadein effect on scroll 
	 $(window).scroll( function(){
    //TODO: add animation delay on each box
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 200;  
          
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({
                	'top': '0',
                	'opacity':'1'
                },500);       
            }
        }); 
    
    });

    // Nav menu toggle 

   $('.menu-icon').on('click', function(e) {
        $('.trigger').toggleClass('hoverTouch').css('background-color', '#333447');
        $('.menu-icon').toggleClass("icon-active");
    });

});
