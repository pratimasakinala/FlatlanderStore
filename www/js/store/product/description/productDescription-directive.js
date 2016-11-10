angular.module('gemStore')
       .directive('productDescription', function(){
         return{
           restrict: 'E',
           templateUrl: 'js/store/product/description/product-description.html'
         };
       });
