"use strict";$(document).ready(function(){$(".slideshow").each(function(){var a=$(".slideshow__viewer",this),b=$(".slideshow__meta",this),c=$(".slideshow__carousel",this);// The Viewer at the top
// The meta information (Title + counter)
// The Carousel at the bottom
a.not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0,asNavFor:".slideshow__carousel, .slideshow__meta"}),b.not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0}),c.not(".slick-initialized").slick({slidesToShow:5,slidesToScroll:1,infinite:!0,accessibility:!0,mobileFirst:!0,asNavFor:".slideshow__viewer, .slideshow__meta",prevArrow:$(".slideshow__nav--prev",this),nextArrow:$(".slideshow__nav--next",this),centerMode:!0,focusOnSelect:!0})})});
//# sourceMappingURL=slideshow.js.map
