$(document).ready(function(){
  $('.slideshow').each(function() {
    const currentViewer = $('.slideshow__viewer', this);
    const currentMeta = $('.slideshow__meta', this);
    const currentCarousel = $('.slideshow__carousel', this);
    // The Viewer at the top
    currentViewer.not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      asNavFor: '.slideshow__carousel, .slideshow__meta',
    });
    // The meta information (Title + counter)
    currentMeta.not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
    });
    // The Carousel at the bottom
    currentCarousel.not('.slick-initialized').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      accessibility: true,
      mobileFirst: true,
      asNavFor: '.slideshow__viewer, .slideshow__meta',
      prevArrow: $('.slideshow__nav--prev', this),
      nextArrow: $('.slideshow__nav--next', this),
      centerMode: true,
      focusOnSelect: true,
    });
  });
});
