'use strict';

import SynthDirective from './components/synth/directives/synth';

angular.module('synth', ['ngResource', 'ui.router', 'mm.foundation'])
  .directive('synthDirective', SynthDirective)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $urlRouterProvider.otherwise('/');
  })
;
