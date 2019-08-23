(function () {
'use strict';

angular.module('nameCalculatorApp', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.name = "Kim";
  $scope.numericValue = 0;
  $scope.calculateNameValue = function () {
    $scope.numericValue = calculateStringValue($scope.name);
  }
});

function calculateStringValue(string) {
  var stringValue = 0;

  for (var i = 0; i < string.length; i++) {
    stringValue += string.charCodeAt(i);
  }

  return stringValue;
}

})();
