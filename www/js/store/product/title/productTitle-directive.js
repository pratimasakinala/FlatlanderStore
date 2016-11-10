angular.module('gemStore')
       .directive('productTitle', function(){
          return {
            restrict: 'E',
            templateUrl: 'js/store/product/title/product-title.html' //relative to index.html
          };
        });
