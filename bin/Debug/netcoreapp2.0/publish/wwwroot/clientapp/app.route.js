
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $stateProvider
        .state('home', {
            url: "/home",
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'RWA Consórcio Cardoso | Especialista em Consórcios'
        })    
        .state('como-fazer-consorcio', {
            url: "/como-fazer-consorcio",            
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Como funciona | Especialista em Consórcios'

        })
        .state('tipos-consorcio', {
            url: "/tipos-consorcio",
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Tipos de Consórcios | Especialista em Consórcios' 
        })
        .state('vantagens', {
            url: "/vantagens",
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Vantagens de fazer | Especialista em Consórcios' 
        })
        .state('depoimentos', {
            url: "/depoimentos",
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Depoimentos | Especialista em Consórcios' 
        })
        .state('contato', {
            url: "/contato",
            reloadOnSearch: false,
            templateUrl: "clientapp/components/home/home.html",
            title: 'Fale Conosco | Especialista em Consórcios'
        })

    $urlRouterProvider.otherwise("/home");    

});