$(document).ready(function(){

    //scrolltriger
    $(window).scroll(function () {
      $('.ani_stop').each(function (i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if (bottom_of_window > bottom_of_object) {
              $(this).removeClass('ani_stop');
          }
          if (bottom_of_window < bottom_of_object) {
              $(this).addClass('ani_stop');
          }
      });
    });

    //mobile gnb 
    $('.mgnb_wrap').hide();
    $('.ham').click(function(){
        $('.mgnb_wrap').fadeIn();
    });
    $('.close').click(function(){
        $('.mgnb_wrap').fadeOut();
    });

    //main visual 
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        dots:true,
        fade:true,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                  autoplay: true,
                  arrows:false
              }
            }
          ]
    });

    //active
    $('#books ul li:nth-child(1)').addClass('active');
    $('#books ul li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //main visual 
    $('.media_list').slick({
      autoplay: true,
      autoplaySpeed: 8000,
      dots:true,
      arrows:false,
      fade:true
  });
});