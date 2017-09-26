app.controller('homeController', function ($scope) {

    $scope.init = function () {
        
        //SWIPER BANNER PRINCIPAL

        var swiperBanner = new Swiper('#banner-principal', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            autoplay: 8000,
            effect: 'fade',
            speed: 1200,
            autoplayDisableOnInteraction: false,
            // If we need pagination                        
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });        
        
    };

    
    //FUNÇÃO INICIAL

    angular.element(document).ready(function () {
        $scope.init();
    });

});