(function() {
  "use strict";

  angular
    .module("LunchCheckApp", [])

    .controller("LunchCheckController", LunchCheckController)
    .filter("nullAndWhitespace", NullAndWhitespaceFilter)
    .filter("extra", ExtraFilter);

  LunchCheckController.$inject = ["$scope", nullAndWhitespaceFilter];

  function LunchCheckController($scope, nullAndWhitespaceFilter) {
    $scope.lunchString = "";

    $scope.message = "";
    $scope.textColorClass = "";
    $scope.borderColorClass = "";

    $scope.lunchCost = "";

    $scope.onCheckIfTooMuchClicked = function() {
      var lunchStringFiltered = nullAndWhitespaceFilter($scope.lunchString);

      var foodList = lunchStringFiltered.split(",");

      var foodLength = foodList.length;

      $scope.lunchCost = 3.3 * foodLength;

      if (foodLength == 0) {
        $scope.textColorClass = "text-danger";

        $scope.message = "Please enter data first";

        return;
      }

      $scope.textColorClass = "text-success";

      if (foodLength <= 3) {
        $scope.message = "Enjoy!";

        return;
      }

      $scope.message = "Too much!";
    };
  }

  function NullAndWhitespaceFilter() {
    return function(input) {
      /** Trim multiple colons between tokens. */
      var output = input.replace(/(, *,+)/gm, ",");
      /** Trim whitespaces from tokens. */
      output = output.replace(/(, *)|( *,)/gm, ",");
      /** Trim colons after last token. */
      output = output.replace(/(,*$)/gm, "");

      return output;
    };
  }

  function ExtraFilter() {
    return function(input, extraChar, extraCount) {
      if (input == "") {
        return;
      }

      var output = input;

      for (var i = 0; i < extraCount; i++) {
        output = extraChar + output + extraChar;
      }

      return output;
    };
  }
})();
