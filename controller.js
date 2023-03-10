// var app = angular.module('DemoApp',[]);
// app.controller('ItemListController', function ($scope){
//     $scope.items = [
//         {
//             "description": "coffee pot",
//         },
//         {
//             "description": "nerf gun",
//         },
//         {
//             "description": "phone",
//         },
//     ];
// })

// function ItemListController($scope) {
//     $scope.items = [
//         {
//             "description": "coffee pot",
//         },
//         {
//             "description": "nerf gun",
//         },
//         {
//             "description": "phone",
//         },
//     ];
// }

function ItemListController($scope) {
    $scope.items = [
        {
            "name": "John Doe",
            "description": "male",
        },
        {
            "name": "Tywin Lannister",
            "description": "female",
        },
    ];
}

angular
  .module('DemoApp', [])
  .controller('ItemListController', ItemListController);

