


$(window).load(function() {
    
              setTimeout(function() {
                $('.spinner').fadeOut("slow");
                    
                  setTimeout(function() {
                  $('#prelaoder').fadeOut("slow"); 
                  
                      setTimeout(function() {
                          $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
                           $('#footer').fadeIn('slow');
                           
                      }, 900);
                  }, 700);    
              }, 700);  
          
        });




	 $('.owl-carousel').owlCarousel({
            lazyLoad: true,
            mouseDrag:true,
            touchDrag:true,
            items:1,
            lazyLoad:true,
            loop:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });