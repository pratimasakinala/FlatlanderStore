angular.module('gemStore')
       .controller('ReviewController', ReviewController);

       function ReviewController(){
         this.review = {};

         this.addReview = function(product){
           this.review.createdOn = Date.now();
           product.reviews.push(this.review);
           this.review = {};
         };
       }
