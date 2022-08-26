$(function () {
  
  $("#rateYo").rateYo({
    rating: 4.5,
    readOnly: true,
  });
  
  $('.comments__slider').slick({
    slidesToShow: 2,
    arrows: false,
    infinite: true,
    dots: true,
    draggable: false,
    autoplay: false,
    autoplaySpeed: 6000,
    appendDots: $('.comments__slider-dots'),
    responsive:
    [
      {
          breakpoint: 1350,
          settings: {
              slidesToShow: 1,
              draggable: true
          }
      }
    ]
  });

  $('.comments__slider-prev').on('click', function(e){
    e.preventDefault()
    $('.comments__slider').slick('slickPrev')
  })
  $('.comments__slider-next').on('click', function(e){
    e.preventDefault()
    $('.comments__slider').slick('slickNext')
  });
  


  $('.ask__acc-link').on('click', function(e) {
    e.preventDefault()
    $(this).toggleClass('ask__acc-link--active'),
    $(this).children('.ask__acc-text').slideToggle();
  });

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--active')
  })

  $('.brands__burger').on('click', function(e){
    e.preventDefault()
    $('.brands__blocks').slideToggle()
    $('.brands__burger').toggleClass('brands__burger--active')
  })

  setInterval(() => {
      if($(window).width() > '510'){
      $('.brands__blocks')[0].removeAttribute('style')
    }
  }, 0)

  
})