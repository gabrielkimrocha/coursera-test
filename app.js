(function() {
  "use strict";

  angular
    .module("DIApp", [])

    .controller("DIController", function($scope, $filter, $injector) {
      $scope.name = "Kim";

      $scope.upper = function() {
        var upperCase = $filter("uppercase");
        $scope.name = upperCase($scope.name);
      };
    });
})();
