angular.module('gemStore')
       .controller('GalleryController', GalleryController);

       function GalleryController(){
         this.current = 0;

         this.setCurrent = function(x){
          if(x)
            this.current = x;
          else
            this.current = 0;
        };
      }
