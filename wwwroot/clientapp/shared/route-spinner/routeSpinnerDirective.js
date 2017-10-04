app.directive('routeLoadingIndicator', function ($rootScope, $timeout) {
    return {
        restrict: 'E',
        template: "<div ng-show='isRouteLoading' class='loading-indicator'>" +
                    "<div class='loading-indicator-body'>" +
                    "<div class='spinner'>" +
                    "<img src='images/default/loading.svg' data-fallback='images/default/loading.png' class='ld ld-spin x4 img-responsive center-block' />" +                    
                    "</div>" +
                    "</div>" +
                    "</div>",
        replace: true,
        link: function (scope, elem, attrs) {
            scope.isRouteLoading = false;

            $rootScope.$on('$stateChangeStart', function () {                
                scope.isRouteLoading = true;
            });

            $rootScope.$on('$stateChangeSuccess', function () {
                $timeout(function () {
                    scope.isRouteLoading = false;                    
                }, 2200);
            });
        }
    };
});