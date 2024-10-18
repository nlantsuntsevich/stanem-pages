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
        img.src = img.dataset.src;
        img.onload = () => {
          $grid.masonry('layout');
        };
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(image => {
    imageObserver.observe(image);
  });
});

