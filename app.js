(function() {
  "use strict";

  angular
    .module("MsgApp", [])

    .controller("MsgController", MsgController);

  MsgController.$inject = ["$scope"];

  function MsgController($scope) {
    $scope.state = "OFF";

    $scope.toggle = function() {
      if ($scope.state == "OFF") {
        $scope.state = "ON";
      } else {
        $scope.state = "OFF";
      }
    };
  }
})();
