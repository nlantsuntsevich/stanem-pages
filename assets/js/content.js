var $grid = $('.mm-columns');

// Ensure images are loaded before initializing Masonry
$grid.imagesLoaded().done(function() {
  $grid.masonry({
    itemSelector: '.mm-columns__item',
    percentPosition: true
  });
});
