app.controller('templateController', ['$scope', function ($scope) {
        
    $scope.scrollPos = 0;
    
    $scope.fecharMenu = function () {
        $scope.isCollapsed = true;
    }
        
    angular.element(document).ready(function () {
        $scope.fecharMenu();
    });

}]);