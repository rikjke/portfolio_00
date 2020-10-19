document.addEventListener("DOMContentLoaded", function() {

$('.galleryButton').on('click', function() {
  $('.galleryButton').removeClass('active');
  $(this).addClass('active');
});

$('.iconsButton').on('click', function() {
  $('.portfolioItem').parent().css('display', 'none');
  $('.iconsItem').parent().css('display', 'block');

});


$('.appsButton').on('click', function() {
  $('.portfolioItem').parent().css('display', 'none');
  $('.appsItem').parent().css('display', 'block');

});

$('.webButton').on('click', function() {
  $('.portfolioItem').parent().css('display', 'none');
  $('.webItem').parent().css('display', 'block');

});

$('.allButton').on('click', function() {
  $('.portfolioItem').parent().css('display', 'block');

});

var scroll = new SmoothScroll('a[href*="#"]');

});
