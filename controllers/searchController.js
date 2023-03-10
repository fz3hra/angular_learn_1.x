var app = angular.module('instantSearch', []);

app.filter('searchFor', function searchFor(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){

            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

        });

        return result;
    };

});

app.controller('InstantSearchController', function InstantSearchController($scope) {
    $scope.items = [
        {
            "title": "Angular"
        },
        {
            "title": "Flutter"
        },
    ];
})

// angular
//   .module('instantSearch', [])
//   .controller('InstantSearchController', InstantSearchController);

