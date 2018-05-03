$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('.navbar-toggler').toggleClass('change')
  })

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 534) {
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })

  $('.nav-item a, .header-link, #back-to-top').click(function(link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000);
  })

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 534) {
      $('#back-to-top').addClass('scrollTop');

    } else {
      $('#back-to-top').removeClass('scrollTop');
    }
  })

  $("#header, .info").ripples({
    dropRadius: 20,
    perturbance: 0,
  });

  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',

    gallery: {
      enabled: true
    }

  });

});
