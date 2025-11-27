// owl carousel banner slider
$('.bannerSlider').owlCarousel({
  loop: true,
  items: 1,
  margin: 0,
  autoplay: true,
  smartSpeed: 500,
  dots: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// owl carousel product slider
$('.productSlider').owlCarousel({
  loop: true,
  items: 3,
  margin: 30,
  autoplay: true,
  smartSpeed: 500,
  dots: true,
  nav: true,
  navText: [
    '<i class="fas fa-angle-left leftbtn"></i>',
    '<i class="fas fa-angle-right rightbtn"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

// owl carousel partner slider
$('.partnerSlider').owlCarousel({
  loop: true,
  items: 5,
  margin: 30,
  autoplay: true,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 5,
    },
  },
});

// owl carousel riview slider
$('.reviewSlider').owlCarousel({
  loop: true,
  items: 5,
  margin: 30,
  autoplay: true,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$('.menu-title').on('click', function () {
  let item = $(this).parent();

  $('.menu-item').not(item).removeClass('active').find('.submenu').slideUp();

  item.toggleClass('active');
  item.find('.submenu').slideToggle();
});
