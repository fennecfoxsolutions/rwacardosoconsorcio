app.controller('capitalGiroController', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
    
    $scope.cancel = function () {       
        $uibModalInstance.close(false);    
    };

}]);