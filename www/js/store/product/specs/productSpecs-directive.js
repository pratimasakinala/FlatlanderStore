angular.module('gemStore')
       .directive('productSpecs', function(){
         return{
           restrict: 'A',
           templateUrl: 'js/store/product/specs/product-specs.html'
         };
       });
