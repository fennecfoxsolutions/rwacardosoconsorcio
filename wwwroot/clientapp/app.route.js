
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: "/home",
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Igaz Engenharia | Especialista em Impermeabilizações'
        })    
        .state('servicos', {
            url: "/servicos",            
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Nossos Serviços | Especialista em Impermeabilizações'

        })
        .state('obras-recentes', {
            url: "/obras-recentes",
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Obras Recentes | Especialista em Impermeabilizações' 
        })
        .state('nossa-empresa', {
            url: "/nossa-empresa",
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Conheça nossa trajetória | Especialista em Impermeabilizações' 
        })
        .state('contato', {
            url: "/contato",
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Fale Conosco | Especialista em Impermeabilizações'
        })

    $urlRouterProvider.otherwise("/home");

});
