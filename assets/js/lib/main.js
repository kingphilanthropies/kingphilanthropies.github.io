$(document).ready(function(){

    var heroTitle = $('.section-photo h1');
    var heroSubtitle = $('.section-photo h3');
    var heroDash = $('.section-photo span');
    var hero = $('.initiatives-sub .img-settings');

    heroTitle.add(heroSubtitle).add(heroDash).add(hero).each(function() {
        $(this).animate({
            'opacity':'1',
            'easing': 'easeOutQuart'
        }, 1000);       
    });


	// Add fadein effect on scroll 
	 $(window).scroll( function(){
        $('.fadeInBlock').each(function(){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 300;  
          
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({
                	'top': '0',
                	'opacity':'1',
                    'easing': 'easeOutQuart'
                }, 500);       
            }
        }); 
    
    });

    // Nav menu toggle 

   $('.menu-icon').on('click', function(e) {
        $('.trigger').toggleClass('hoverTouch').css('background-color', '#333447');
        $('.menu-icon').toggleClass("icon-active");
    });

});
