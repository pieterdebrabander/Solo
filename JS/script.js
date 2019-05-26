/* ======================================
            Preloader
====================================== */
$(window).on('load', function() { // makes sure that whole site is loaded
  $("#status").fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* ======================================
            Team
====================================== */
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
  });
});


/* ======================================
            Progress bars
====================================== */
$(function() {

  $("#progress-elements").waypoint(function() {
    $(".progress-bar").each(function() {
      $(this).animate({
        width: $(this).attr('aria-valuenow') + "%"
      }, {
        duration: 1000,
        easing: "linear"
      });
    });
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });

});

/* ======================================
            Responsive tabs
====================================== */
$(function() {
  $('#services-tabs').responsiveTabs({
    startCollapsed: 'accordion',
    animation: 'slide', // The panels will slide up and down
  });
});

/* ======================================
            Testimonials
====================================== */
$(function() {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
  });
});
