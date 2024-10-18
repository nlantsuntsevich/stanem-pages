var $grid = $('#gallery').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.mm-columns__item',
      percentPosition: true
    }); 
  });