$(document).ready(function() {
    // ���j���[�o�[�ݒ�
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

    // ���j���[�I�����̃X�N���[���ݒ�
    $('#menu a').click(function() {
        var scrollTime = 400;
        var href = $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - 50;
        $('body, html').animate({scrollTop:position}, scrollTime, 'swing');
        return false;
    });

    // ���j���[�I�����̃X�N���[���ݒ�
    var fadeTime = 300;
    $('#menu a').hover(
        function() {
            $(this).fadeTo(fadeTime, 0.3);
        },
        function() {
            $(this).fadeTo(fadeTime, 1);
        }
    );

    // ���[�_���E�B���h�Eopen
    $('.modal-open').each(function() {
        var target = $(this).data('target');
        var modal = document.getElementById(target);

        // ���[�_���E�B���h�Eopen
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

    // ���[�_���E�B���h�Eclose
    $('.modal-close').on('click',function() {
        $('.modal').fadeOut();
        return false;
    });
});