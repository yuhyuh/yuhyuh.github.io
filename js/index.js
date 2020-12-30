$(document).ready(function(){
    var navPos = $('#header-menu').offset().top;
    var navHeight = $('#header-menu').outerHeight();
    $(window).on('scroll', function(){
      if ($( this).scrollTop() > navPos ) {
        $('body').css('padding-top', navHeight);
        $('#header-menu').addClass('m_fixed');
      } else {
        $('body').css('padding-top', 0);
        $('#header-menu').removeClass('m_fixed');
      }
    });
});