'use strict';

/**
 * @ngdoc overview
 * @name resumeApp
 * @description
 * # resumeApp
 *
 * Main module of the application.
 */
angular
  .module('resumeApp', [
    'ngAnimate',
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider) {

  	$stateProvider

  	.state('home', {
  		url: '/',
  		resolve: {
  			company: function() {
  				return "you";
  			}
  		},
  		templateUrl: 'views/main.html',
  		controller: 'MainCtrl',
  		controllerAs: 'home'
  	})

  	.state('company', {
  		url: '/:company',
  		resolve: {
  			company: function($stateParams) {
  				return $stateParams.company;
  			}
  		},
  		templateUrl: 'views/main.html',
  		controller: 'MainCtrl',
  		controllerAs: 'home'
  	})

  	.state('resume', {
  		url: '/:company/resume',
  		resolve: {
  			company: function($stateParams) {
  				return $stateParams.company;
  			}
  		},
  		templateUrl: 'views/resume.html',
  		controller: 'ResumeCtrl',
  		controllerAs: 'resume'
  	})

    .state('resume.web', {
      url: '/web',
      resolve: {
        company: function($stateParams) {
          return $stateParams.company;
        }
      },
      views: {
        'web': {
          templateUrl: 'views/web.html'
        }
      }
    })

    .state('resume.videos', {
      url: '/videos',
      resolve: {
        company: function($stateParams) {
          return $stateParams.company;
        }
      },
      views: {
        'videos': {
          templateUrl: 'views/videos.html'
        }
      }
    })

    .state('resume.images', {
      url: '/images',
      resolve: {
        company: function($stateParams) {
          return $stateParams.company;
        }
      },
      views: {
        'images': {
          templateUrl: 'views/images.html'
        }
      }
    })

    .state('resume.news', {
      url: '/news',
      resolve: {
        company: function($stateParams) {
          return $stateParams.company;
        }
      },
      views: {
        'news': {
          templateUrl: 'views/news.html'
        }
      }
    })

  	$urlRouterProvider.otherwise('/');
  });
