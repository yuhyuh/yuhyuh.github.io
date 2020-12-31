$(document).ready(function() {
    // メニューバー設定
    var menuTop = $('#menu').offset().top;
    var menuHeight = $('#menu').outerHeight();
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > menuTop) {
            $('body').css('padding-top', menuHeight);
            $('#menu').addClass('menu-fixed');
        } else {
            $('body').css('padding-top', 0);
            $('#menu').removeClass('menu-fixed');
        }
    });

    // メニュー選択時のスクロール設定
    $('#menu a').click(function() {
        var scrollTime = 400;
        var href = $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - 50;
        $('body, html').animate({scrollTop:position}, scrollTime, 'swing');
        return false;
    });

    // メニュー選択時のスクロール設定
    var fadeTime = 300;
    $('#menu a').hover(
        function() {
            $(this).fadeTo(fadeTime, 0.3);
        },
        function() {
            $(this).fadeTo(fadeTime, 1);
        }
    );

    // モーダルウィンドウopen
    $('.modal-open').each(function() {
        var target = $(this).data('target');
        var modal = document.getElementById(target);

        // モーダルウィンドウopen
        $(this).on('click',function() {
            $(modal).fadeIn();
            return false;
        });

        $(this).find('img').css('opacity', 0.6);
        $(this).find('img').hover(
            function() {
                $(this).fadeTo(fadeTime, 1);
            },
            function() {
                $(this).fadeTo(fadeTime, 0.6);
            }
        );
    });

    // モーダルウィンドウclose
    $('.modal-close').on('click',function() {
        $('.modal').fadeOut();
        return false;
    });
});