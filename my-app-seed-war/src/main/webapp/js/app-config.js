define(['angular'], function(angular) {

    return angular.module('app-config', [])
        .constant('SERVICE_LOC', {'sessionInfo' : 'json/sessionsample.json',
            'sidebarInfo' : 'samples/sidebar.json'
        });

});

