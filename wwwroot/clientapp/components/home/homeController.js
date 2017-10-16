app.controller('homeController', ['$scope', 'contatoFactory', '$document', '$uibModal', '$location', '$timeout', '$log', function ($scope, contatoFactory, $document, $uibModal, $location, $timeout, $log) {

    $scope.init = function () {
                
        var swiperBanner = new Swiper('#banner-principal', {            
            direction: 'horizontal',
            loop: false,
            autoplay: 7000,
            effect: 'fade',
            speed: 1200,
            autoplayDisableOnInteraction: false,              
            pagination: '.swiper-pagination-banner',
            paginationClickable: true     
        });

        var swiperDepoimentos = new Swiper('#slide-depoimentos', {            
            direction: 'horizontal',
            loop: false,
            autoplay: 7000,
            effect: 'slide',
            speed: 1200,
            autoplayDisableOnInteraction: true,
            pagination: '.swiper-pagination-depoimentos',
            paginationClickable: true      
        });
        
    };

    //Mover para um local

    $scope.moveTo = function (id, offset) {
        var duration = 1500;
        $document.scrollToElement(angular.element(document.getElementById(id)), offset, duration);
    }

    //URL Location

    if ($location.url()) {
        $scope.scrollElement = angular.element(document.getElementById($location.url().replace('/', '').split('?')[0]));
        $scope.offsetElementScroll = parseInt(angular.element(document.querySelector('#' + $location.url().replace('/', '').split('?')[0])).attr('offset'));
        if ($scope.scrollElement) {
            $timeout(function () {
                $document.scrollToElementAnimated($scope.scrollElement, $scope.offsetElementScroll, 1200);
            }, 1000);
        }
    }

    //modal capital de giro

    var modalInstanceCapitalGiro;
    
    $scope.openModalCapitalGiro = function () {
        modalInstanceCapitalGiro = $uibModal.open({
            animation: false,
            templateUrl: './clientapp/components/modal/servico/capital-giro.tmpl.html',
            size: 'lg',
            controller: 'capitalGiroController'
        });
        modalInstanceCapitalGiro.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    //modal depoimento

    var modalInstanceDepoimento;
    
    $scope.openModalDepoimento = function (depoimentoId) {
        modalInstanceDepoimento = $uibModal.open({
            animation: false,
            templateUrl: './clientapp/components/modal/depoimento/depoimento.tmpl.html',
            size: 'lg',
            resolve: {               
                id: function () {
                    return depoimentoId;
                }
            },
            controller: 'depoimentoController'
        });
        modalInstanceDepoimento.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


    /* Enviar e-mail */

    $scope.contato = {};
    $scope.emailEnviado = 0; // 0 - não enviado // 01 - Enviado com sucesso // 02 - Erro ao enviar
    $scope.textoBotaoEnviar = 'Enviar';
    $scope.travarBotao = false;

    $scope.contatoReset = angular.copy($scope.contato);

    $scope.enviarEmail = function (contato) {

        $scope.textoBotaoEnviar = 'Enviando...';
        $scope.travarBotao = true;

        contatoFactory.sendMail(contato).then(function (data) {
            console.log(data);
            $scope.contato = angular.copy($scope.contatoReset);
            $scope.formularioContato.$setPristine();
            $scope.formularioContato.$setUntouched();
            $scope.travarBotao = false;
            $scope.textoBotaoEnviar = 'Enviar';
            $scope.emailEnviado = 1;
        }).catch(function (data) {
            console.log(data);
            $scope.textoBotaoEnviar = 'Enviar';
            $scope.travarBotao = false;
            $scope.emailEnviado = 2;
        });
    }

    angular.element(document).ready(function () {
        $scope.init();
    });

}]);