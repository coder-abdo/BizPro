(function (win, doc, $){
    "use strict";
    var headerHeight = $('.header').outerHeight();
    var $btn = $('.header__btn');
    $(win).on('scroll', function(){
        if($(this).scrollTop() >= 100){
            $('#home').css('padding-top', headerHeight);
            $('.header').addClass('sticky');
        }else {
            $('#home').css('padding-top', 0);
            $('.header').removeClass('sticky');
        }
        addActiveToLinks();
    });
    function addActiveToLinks(){
        var scrollPos = $(doc).scrollTop();
        $('.nav__link').each(function() {
            var scrollPos = $(win).scrollTop();
            var self = $(this);
            var links = self.attr('href');
            var sections = $(links);
            if(sections.offset().top <= scrollPos){
                self
                .parent()
                .siblings()
                .children()
                .removeClass("active");
                self.addClass("active");
            }else {
                self.removeClass("active");
            }
        });
      }
    if($btn){
        $btn.on('click', function(){
            $('.header__nav').toggleClass('show');
        });
    }
    $('.owl-carousel.main-slider').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        smartSpeed:450,
        autoplay: true,
        loop: true
    });
    var mixer = mixitup('.works');
    $('.skill__percent').each(function () {
        var percent = $(this).find('.skill__amount').text();
        $(this).find('.inner').css('width', percent);
    });
    $('.owl-carousel.clients__testmonails').owlCarousel({
        items:1,
        autoplay: true,
        loop: true
    });
    $('.owl-carousel.sponsors').owlCarousel({
        autoplay: true,
        loop: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            800:{
                items:3,
            },
            1000: {
                items: 5
            }
        }
    });
    $('.nav__link').on('click', function(){
        var hash = $(this).attr('href');
       $('html, body').animate({
           scrollTop: $(hash).offset().top + 1
       }, 800)
    });

})(window, document, jQuery);
