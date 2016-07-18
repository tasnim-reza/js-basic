(function () {
    'use strict';
    
    registerRoute();

    handlePagination();

    //register the singleton services 

    function registerRoute() {
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

        window.routeService.register({
            name: 'page-11',
            url: function (param) {
                return '#/' + this.name;
            },
            templateUrl: 'templates/page-11.html'
            //handler: homeRouteHandler
        })
    }

    function handlePagination() {
        function goToPreviousRoute(params) {
            routeService.goToNext();
        }

        function goToNextRoute(params) {
            routeService.goToNext();
        }

        document.querySelector('.prev').addEventListener('click', goToPreviousRoute);
        document.querySelector('.next').addEventListener('click', goToNextRoute);
    }

    function handleSlider() {
        var slides = document.querySelectorAll('.slide'),
            currentSlideIdx = 0;

        function goToPreviousSlide(params) {
            if(currentSlideIdx === 0) {
                slides[currentSlideIdx].style.display = 'none';
                currentSlideIdx = slides.length -1;
            }
            
            slides[currentSlideIdx].style.display = 'none';
            slides[--currentSlideIdx].style.display = 'block';
        }

        function goToNextSlide(params) {
            if(currentSlideIdx === slides.length -1) {
                slides[currentSlideIdx].style.display = 'none';
                currentSlideIdx = 0;
            }

            slides[currentSlideIdx].style.display = 'none';
            slides[++currentSlideIdx].style.display = 'block';
        }

        document.querySelector('.prev-slide').addEventListener('click', goToPreviousSlide);
        document.querySelector('.next-slide').addEventListener('click', goToNextSlide);

        function handleDestroyRoute() {
            if(document.querySelector('.prev-slide'))
                document.querySelector('.prev-slide').removeEventListener('click', goToPreviousSlide);
            
            if(document.querySelector('.next-slide'))
                document.querySelector('.next-slide').removeEventListener('click', goToNextSlide);
        }
        routeService.registerOnRouteDestroy(handleDestroyRoute);
    }

    routeService.registerOnRouteLoad(handleSlider);    
})()