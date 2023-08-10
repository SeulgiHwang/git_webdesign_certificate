jQuery(document).ready(function(){
    $('.navi>li').mouseover(function(){
       $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
    
    setInterval(function(){
        $('.slide').delay(2000);
        $('.slide').animate({marginLeft:-800});
        $('.slide').delay(2000);
        $('.slide').animate({marginLeft:-1600});
        $('.slide').delay(2000);
        $('.slide').animate({marginLeft:0});
        $('.slide').delay(2000);
    });

    $('.notice a:first').click(function(){
        $('.modal').addClass('active');
    });
    $('.btn').click(function(){
        $('.modal').removeClass('active');
    });
});