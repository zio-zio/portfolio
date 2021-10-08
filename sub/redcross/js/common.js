$(document).ready(function(){
    //gotop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }
    });
    
    
    $(".gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    //scrollTrigger
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

    //dp2 
    $('.dp2').hide();

    $('.gnb>li').mouseenter(function(){
        $(this).children('.dp2').stop().slideDown();
    });
    $('.gnb>li').mouseleave(function(){
        $(this).children('.dp2').stop().slideUp();
    });
   
    //main slide
    $('.ms').slick({
        autoplay: true,
        dots: true
    });

    //gift slide
    $('.gift_list').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

});