var voiture = angular.module('voiture', []);
voiture.controller("Cntrl", function($scope, $http){
  $http.get("assets/js/voiture.json")
        .then(function(res){
          $scope.voitures = res.data;
        })
});
