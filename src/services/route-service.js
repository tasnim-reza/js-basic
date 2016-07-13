(function routeService(window) {
    'use strict';
    
    var routes = {},
        hash = window.location.hash,
        prevRoute = null,
        currentRoute = 'home',
        currentIdx = 0;

    window.setTimeout(function () {
        if (hash.indexOf('#') > -1) {
            var token = hash.split('/'),
                routeName = token[1],
                param = token[2];
            window.routeService.go(routeName, param);
        } else {
            window.routeService.go('home')
        }
    }, 100);

    var publicService = {
        go: function (name, param) {
            name = name ? name : 'home';
            var route = routes[name],
                url = route.url(param);
                
            if (prevRoute !== url) {
                if(route.templateUrl){
                    fetchService.fetch(route.templateUrl).then(function (data) {
                       handleRoute.call(null, data,  url); 
                    }); 
                }                
            }
        },

        register: function (param) {
            routes[param.name] = param;
        },

        goToNext: function () {
            var keys = Object.keys(routes);
                currentIdx = keys.indexOf(currentRoute);
                //var nextIdx = currentIdx++,
                var nextRoute = keys[++currentIdx];

            this.go(nextRoute, routes[nextRoute]);
        },

        goToPrev: function () {
            var keys = Object.keys(routes),
                //currentyIdx = keys.indexOf(currentRoute),
                prevIdx = currentIdx--;
                if(prevIdx>0){
                    var prevRoute = keys[prevIdx];
                    this.go(prevRoute, routes[prevRoute]);
                }
        }
    };

    function handleRoute(result, url) {
        window.location.href = url;
        prevRoute = url;
        //route.handler.call(this, param)
        var view = document.querySelector('#view');
        view.innerHTML = result;
    }

    window.routeService = publicService;
})(window)