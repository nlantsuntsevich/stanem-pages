var $grid = $('.mm-columns').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.mm-columns__item',
      percentPosition: true,
      columnWidth: '.mm-columns__item'
    }); 
  });