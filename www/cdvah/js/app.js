/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
*/

var myApp = angular.module('ChromeAppDeveloperTool', ['ngRoute', 'angularMoment']);

myApp.value('APP_NAME', 'Chrome App Developer Tool');
myApp.value('APP_VERSION', '0.13.1-dev');

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
    });
    $routeProvider.when('/details/:index', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
    });
    $routeProvider.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    });
    $routeProvider.when('/permission', {
        templateUrl: 'views/permission.html',
        controller: 'PermissionCtrl'
    });
}]);

myApp.run(['$rootScope', 'APP_NAME', 'APP_VERSION', function($rootScope, APP_NAME, APP_VERSION){
    $rootScope.appTitle = APP_NAME;
    $rootScope.appVersion = APP_VERSION;
    $rootScope.appLaunchReported = false;
    document.title = APP_NAME + ' v' + APP_VERSION;
}]);

document.addEventListener('deviceready', function() {
    myApp.value('INSTALL_DIRECTORY', cordova.file.dataDirectory + 'apps/');
    myApp.value('APPS_JSON', cordova.file.dataDirectory + 'apps.json');
    myApp.value('TEMP_DIR', cordova.file.tempDirectory || cordova.file.cacheDirectory);
    angular.bootstrap(document, ['ChromeAppDeveloperTool']);
}, false);
