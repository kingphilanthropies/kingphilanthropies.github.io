$(document).ready(function(){
	// $("div.lazy").lazyload();

	// Add fadein effect on scroll 
	 $(window).scroll( function(){
    
       
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
});
