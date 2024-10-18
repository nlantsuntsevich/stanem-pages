$(document).ready(function () {
  var $grid = $('.mm-columns');

  // Ensure images are loaded before initializing Masonry
  $grid.imagesLoaded().done(function() {
    $grid.masonry({
      itemSelector: '.mm-columns__item',
      percentPosition: true
    });
  });

  // Lazy-load images with IntersectionObserver
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;  // Set image source to data-src value
        img.onload = () => {
          $grid.masonry('layout');  // Re-layout Masonry after image loads
        };
        img.removeAttribute('data-src');  // Remove the data-src attribute after loading
        observer.unobserve(img);  // Stop observing once image is loaded
      }
    });
  });

  lazyImages.forEach(image => {
    imageObserver.observe(image);
  });
});