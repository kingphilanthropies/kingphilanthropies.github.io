$(document).ready(function(){

    var heroTitle = $('.section-photo h1');
    var heroSubtitle = $('.section-photo h3');
    var heroDash = $('.section-photo span');
    var heroImages = $('.heroImage');


    heroTitle.add(heroSubtitle).add(heroDash).add(heroImages).each(function() {
        $(this).animate({
            'opacity':'1',
            'easing': 'easeOutCirc'
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

   // searching for orphan
   $('p, h3').each(function(){
        var string = $(this).html();
        string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
        $(this).html(string);
    });

    // Homepage newsletter
    addEmailSubscriptionEventListener();

    
    $("#modal-trigger").on('click', function(e) {
        e.preventDefault();
        var email = $('footer .email-signup-form input[type=email]').val(); 
        modal.show();
        $('.pico-content #mc_embed_signup_scroll input[type=email]').val(email);
        addEmailSubscriptionEventListener();
    });



    function addEmailSubscriptionEventListener(){
        $(".email-signup-form").submit(function(e) {
          e.preventDefault();
          var $form = $(this);

            $.ajax({
                dataType: 'jsonp',
                contentType: "application/json; charset=utf-8",
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache : false,
                error : function(err) { alert("Could not connect to the registration server. Please try again later."); },
                success : function(data) {
                    if (data.result != "success") {
                        $('.newslettersignup').html(`<p style="text-align:center;">` + data.msg + `</p>`);
                     modal.close();
                    } else {
                        $('.newslettersignup').html('<h2 class="subtle">Thank you for your interest in King Philanthropies.<br/>We will update you soon on our work.<h2></h2>');
                        modal.close();
                    }
                }
            });
        });
   };
});
