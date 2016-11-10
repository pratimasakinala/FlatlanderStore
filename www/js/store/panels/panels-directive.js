angular.module('gemStore')
       .directive('productPanels', function(){
         return{
           restrict: 'E',
           templateUrl: 'js/store/panels/panels.html',
           controller: 'PanelsController',
           controllerAs: 'panels'
         };
       });
