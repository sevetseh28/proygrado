/**
 * Created by Hernan on 20/11/2016.
 */
angular.module("materialAdmin")
    .directive('comparisonStep', function () {
        return {
            restrict: "E",
            templateUrl: "template/directives/comparison-step.html",
            controller: function ($scope) {
                $scope.comparison['title'] = 'Comparison';

                $scope.comparison.returnValue = {};

                $scope.comparison.updateReturnValue = function() {
                    $scope.comparison.returnValue = {};
                    for(var of in $scope.comparison.outputFields){
                        of = $scope.comparison.outputFields[of];
                        ofRet = {};
                        $scope.comparison.returnValue[of.name] = ofRet;
                        ofRet.name = of.selectedModule.id;
                        ofRet.config = {};

                        for(var config in of.selectedModule['config']){
                            ofRet.config[config] = of.selectedModule['config'][config].returnValue[config]
                        }
                    }
                };

                $scope.$watch('comparison.outputFields', $scope.comparison.updateReturnValue, true);
            }
        }
    });