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
  		templateUrl: 'views/landing.html',
  		controller: 'ResumeCtrl',
  		controllerAs: 'resume'
  	})

    .state('resume.experiences', {
      url: '/experiences',
      resolve: {
        company: function($stateParams) {
          return $stateParams.company;
        }
      },
      views: {
        'experiences': {
          templateUrl: 'views/experiences.html'
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

    .state('resume.projects', {
      url: '/projects',
      resolve: {
        company: function($stateParams) {
          return $stateParams.company;
        }
      },
      views: {
        'projects': {
          templateUrl: 'views/projects.html'
        }
      }
    })

  	$urlRouterProvider.otherwise('/');
  });
