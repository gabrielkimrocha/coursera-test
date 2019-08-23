(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Kim";
  $scope.sayHello = function () {
    return "Hello, world!"
  };
});

})();
