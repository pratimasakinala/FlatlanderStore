angular.module('gemStore')
       .directive('productGallery', function(){
          return {
            restrict: 'E',
            templateUrl: 'js/store/gallery/gallery.html',
            controller: 'GalleryController',
            controllerAs: 'gallery'
          };
        });
