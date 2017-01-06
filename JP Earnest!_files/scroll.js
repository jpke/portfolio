$(document).ready(function(){
  // Smooth Scrolling Snippet from CSS Tricks
  // https://css-tricks.com/snippets/jquery/smooth-scrolling/

  var _isOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);

  if (_isOS) {
    $('body, #footer').addClass('is-os');
  }
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});
