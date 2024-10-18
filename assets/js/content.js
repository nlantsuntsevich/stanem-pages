var $container = $('.mm-columns');
$container.imagesLoaded(function(){
  $container.masonry({
    itemSelector : '.mm-columns__item',
    percentPosition: true
  });
});
