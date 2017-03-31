angular.module('gemStore')
      .controller('GemsController', GemsController);

      function GemsController($http){
        var vm = this;
        vm.gems = [];

        $http.get('js/store/product/gems/gems.json')//relative to index.html
             .success(function(data){
               vm.gems = data;
             });
      }
