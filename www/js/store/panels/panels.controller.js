angular.module('gemStore')
       .controller('PanelsController', PanelsController);

       function PanelsController(){
         //  this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab;
        };

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        }
      }
