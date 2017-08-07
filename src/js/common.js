$(function(){

  //Preloader
   setTimeout(function() {
        $("#loader").fadeOut();
        $("#preloader").fadeOut("slow");
   }, 500);



    //Typed
    var typed = new Typed('.typed', {
        strings: ["s","My Name is M.Reza", "I'm a Web Designer", "Love Simplicity"],
        typeSpeed: 100,
        backDelay: 900,
        loop: true
    });




    $('.skillbar').each(function() {
            $(this).appear(function() {
              $(this).find('.count-bar').animate({
                  width: $(this).attr('data-percent')
              }, 3000);
              var percent = $(this).attr('data-percent');
              $(this).find('.count').html(`<span>${percent}</span>`);
            });

    });

   $('.portfolio-img li a').magnificPopup({
     type: 'image',
     gallery: {
       enabled: true
     }
   });

   //Active menu
   $('.wrap-menu nav ul li a').bind('click', function(e) {
       e.preventDefault();
       var thisMenu = $(this);
       var block = $(this).attr('data-id');
       var position = $(block);

       $('html, body').animate({
            scrollTop: position.position().top
       }, 500,  function() {
         $('.wrap-menu nav ul li a').each(function () {
              $(this).find('span').hide();

         });
              thisMenu.find('span').show();
       });
   });


   $('#open-menu').bind('click', function() {
          $('.wrap-menu').addClass('active-menu');
          $('.wrap-menu nav ul li').each(function() {
              var elem = $(this).attr('data-translate');
              $(this).css('transform', "translateY(0)");
          });
   });
   $('#btn_hide_menu').bind('click', function() {
        $('.wrap-menu').removeClass('active-menu');
        $('.wrap-menu nav ul li').each(function() {
            var elem = $(this).attr('data-translate');
            $(this).css('transform', "translateY("+elem+")");
        });

   });


   //Swiper carouse l
   var swiper = new Swiper('#swiper-container1', {
       pagination: '#swiper-container1 .swiper-pagination',
       paginationClickable: true,
       speed: 700
   });

   //Swiper carousel 2
   var swiper2 = new Swiper('#swiper-container2', {
       pagination: '#swiper-container2 .swiper-pagination',
       paginationClickable: true,
       speed: 700,
       autoplay: 2000
   });


});
