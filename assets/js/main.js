$(function () {
    //SUSPENDE MENU
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.header').outerHeight() + 60) {
            $('body').css('padding-top', $('.header').outerHeight())
            $('.header').addClass('header-fixed');
            $('.goto').fadeIn(500).css("display", "flex");
        } else {
            $('body').css('padding-top', '0')
            $('.header').removeClass('header-fixed');
            $('.goto').fadeOut(500);
        }
    });

    //VOLTAR AO TOPO
    $('.goto').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    //############## ANCORA
    $('nav a').click(function () {
        var Goto = $($(this).attr("href"));
        if (Goto.length) {
            $('html, body').animate({
                scrollTop: Goto.offset().top
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });
});