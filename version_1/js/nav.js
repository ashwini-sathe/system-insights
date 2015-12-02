$(document).ready(function() {
    $('.navbar-nav li').click(function() {
      $('.navbar-nav li').removeClass('active');
      $(this).addClass('active');
    });
  });
  $(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
  });
