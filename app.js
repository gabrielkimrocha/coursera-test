(function() {
  "use strict";

  angular
    .module("LunchCheckApp", [])

    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.lunchString = "";

    $scope.message = "";
    $scope.textColorClass = "";
    $scope.borderColorClass = "";

    $scope.onCheckIfTooMuchClicked = function() {
      var foodList = $scope.lunchString.split(",");

      /** Checks for empty / whitespaces-filled strings between commas. */
      var foodListFiltered = foodList.filter(function(element) {
        if (!isEmptyOrSpaces(element)) return element;
      });

      if (foodListFiltered.length == 0) {
        $scope.message = "Please enter data first";
        $scope.textColorClass = "text-danger";

        return;
      }

      $scope.textColorClass = "text-success";

      if (foodListFiltered.length <= 3) {
        $scope.message = "Enjoy!";

        return;
      }

      $scope.message = "Too much!";
    };

    function isEmptyOrSpaces(str) {
      return str === null || str.match(/^ *$/) !== null;
    }
  }
})();
