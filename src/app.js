(function () {
    'use strict';
    
    //route registration
    window.routeService.register({
        name: 'detail',
        url: function (param) {
            return '#/' + this.name + '/' + param;
        },
        //handler: fileDetailsHandler
    })

    window.routeService.register({
        name: 'home',
        url: function (param) {
            return '#/' + this.name;
        },
        templateUrl: 'templates/hoisting-explained.html'
        //handler: homeRouteHandler
    })

    window.routeService.register({
        name: 'array-explanation',
        url: function (param) {
            return '#/' + this.name;
        },
        templateUrl: 'templates/array-explanation.html'
        //handler: homeRouteHandler
    })

    window.routeService.register({
        name: 'functional-programming',
        url: function (param) {
            return '#/' + this.name;
        },
        templateUrl: 'templates/functional-programming.html'
        //handler: homeRouteHandler
    })
    
    window.routeService.register({
        name: 'oop-explained',
        url: function (param) {
            return '#/' + this.name;
        },
        templateUrl: 'templates/oop-explained.html'
        //handler: homeRouteHandler
    })
    
    window.routeService.register({
        name: 'page-1',
        url: function (param) {
            return '#/' + this.name;
        },
        templateUrl: 'templates/page-1.html'
        //handler: homeRouteHandler
    })

    function goToPreviousRoute(params) {
        routeService.goToNext();
    }

    function goToNextRoute(params) {
        routeService.goToNext();
    }

    document.querySelector('.prev').addEventListener('click', goToPreviousRoute);
    document.querySelector('.next').addEventListener('click', goToNextRoute);

    //register the singleton services 
})()