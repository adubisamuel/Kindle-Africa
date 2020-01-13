jQuery(document).ready(function ($) {

    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });

  // Header fixed
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#sticky-header').addClass('header-fixed');
    } else {
      $('#sticky-header').removeClass('header-fixed');
    }
  });

  // Toggle Bar
let count = 0;
$('.menu-toggle').click( function (){
    
    if(count === 0){
        $(this).toggleClass('open');
        $(this).removeClass('close');
        $('.side-bar').toggleClass('slide-in');
        $('.full-overlay').show();
        count++;
    }else{
        setTimeout(function(){
            $('.side-bar').toggleClass('slide-in')
        },100)
        $(this).removeClass('open');
        $(this).toggleClass('close');
        $('.full-overlay').hide();
        count = 0
    }

});

//  Overlay click eevnt
$('.full-overlay').click( function (){
    setTimeout(function(){
        $('.side-bar').toggleClass('slide-in')
    },100)
    $('.menu-toggle').removeClass('open');
    $('.menu-toggle').toggleClass('close');
    $('.full-overlay').hide();
    count = 0
});

//     // Mobile Navigation
//   if ($('#nav-menu-container').length) {
//     var $mobile_nav = $('#nav-menu-container').clone().prop({
//       id: 'mobile-nav'
//     });
//     $mobile_nav.find('ul').attr({
//       'class': '',
//       'id': ''
//     });
//     $('body').append($mobile_nav);
//     $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
//     $('body').append('<div id="mobile-body-overly"></div>');

//     $(document).on('click', '#mobile-nav-toggle', function (e) {
//       $('body').toggleClass('mobile-nav-active');
//       $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
//       $('#mobile-body-overly').toggle();
//     });

//     $(document).click(function (e) {
//       var container = $("#mobile-nav, #mobile-nav-toggle");
//       if (!container.is(e.target) && container.has(e.target).length === 0) {
//         if ($('body').hasClass('mobile-nav-active')) {
//           $('body').removeClass('mobile-nav-active');
//           $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
//           $('#mobile-body-overly').fadeOut();
//         }
//       }
//     });
//   } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
//     $("#mobile-nav, #mobile-nav-toggle").hide();
//   }

});