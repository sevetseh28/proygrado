angular.module("materialAdmin")
.directive('segmentationStep', function() {
    return {
        restrict: "E",
        templateUrl: "template/directives/segmentation-step.html",
        controller: function ($scope) {

            $scope.extraction['title'] = 'Segmentation';
        }
    }
});