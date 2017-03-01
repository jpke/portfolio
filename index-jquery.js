$(document).ready(function(){
  // Smooth Scrolling Snippet from CSS Tricks
  // https://css-tricks.com/snippets/jquery/smooth-scrolling/

  var _isOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);

  if (_isOS) {
    $('#top, #contactAndFooter').addClass('is-os');
    $('body').removeClass('bodyNonIOS');
    $('#projects, #contact').css('margin-top', 0);
  }

  $(function() {
    //smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        console.log("this: ", this, "hash: ", this.hash);
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
