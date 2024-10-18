var $container = $('#galerry');
$container.imagesLoaded(function(){
  $container.masonry({
    itemSelector : '.mm-columns__item',
    percentPosition: true
  });
});
