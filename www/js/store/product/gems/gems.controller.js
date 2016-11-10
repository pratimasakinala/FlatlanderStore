angular.module('gemStore')
      .controller('GemsController', GemsController);

      function GemsController(){
        var vm = this;
        vm.gems = [
          {
            name: 'Azurite',
            description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
            price: '2.95',
            shine: 8,
            rarity: 7,
            faces: 14,
            // canPurchase: true,
            soldOut: false,
            images: [
                'azurite-01-full.jpg',
                'azurite-01-thumb.jpg'
            ],
            reviews: [
              {
                stars: 5,
                body: 'I love this product!',
                author: 'joe@thomas.com'
              },
              {
                stars: 1,
                body: 'This product sucks',
                author: 'tim@hater.com'
              }
            ]
          },
          {
            name: 'Dodecahedron',
            description: 'Origin of the Dodecahedron is unknown, hence its low value. It has a very high shine and 12 sides, however.',
            price: '2.99',
            shine: 9,
            rarity: 6,
            faces: 12,
            // canPurchase: true,
            soldOut: false,
            images: [
                'dodecahedron-01-full.jpg',
                'dodecahedron-01-thumb.jpg'
            ]
          },
          {
            name: 'Pentagonal Gem',
            description: 'Pentagonal is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.',
            price: '5.95',
            shine: 70,
            rarity: 2,
            faces: 6,
            // canPurchase: false,
            soldOut: false,
            images: [
                'pentagonal-01-full.jpg',
                'pentagonal-01-thumb.jpg'
            ]
          }
        ];
      }
