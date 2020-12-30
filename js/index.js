$(document).ready(function(){
    // ���j���[�o�[�ݒ�
    var menuTop = $('#menu').offset().top;
    var menuHeight = $('#menu').outerHeight();
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > menuTop) {
            $('body').css('padding-top', menuHeight);
            $('#menu').addClass('menu_fixed');
        } else {
            $('body').css('padding-top', 0);
            $('#menu').removeClass('menu_fixed');
        }
    });

    // ���[�_���E�B���h�Eopen
    $('.modal-open').on('click',function(){
        var id = $(this).data('target');
        var modal = document.getElementById(id);
        $(modal).fadeIn();
        return false;
    });

    // ���[�_���E�B���h�Eclose
    $('.modal-close').on('click',function(){
        $('.modal').fadeOut();
        return false;
    });
});