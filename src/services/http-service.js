(function (window) {
    function fetchService() {
        'use strict';
        /*
        This is used to fetch data from server.
        If we remove mock then it will work
        */
        this.fetch = function (url, payload) {
            return fetch(url, payload).then(function (result) {
                //process result
                return result.text().then(function (data) {
                    return data;
                });
            })
        }
    }
    
    
    window.fetchService = new fetchService();

})(window)