app.controller('depoimentoController', ['$scope', 'id', '$uibModalInstance', function ($scope, id, $uibModalInstance) {
    
    $scope.activeId = id;

    $scope.cancel = function () {               
        $uibModalInstance.close(false);
    };

}]);