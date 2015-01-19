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
    'ui.router',
    'wu.masonry'
  ])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  	$stateProvider

  	.state('home', {
  		url: '/',
  		resolve: {
  			company: function() {
  				return "I";
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
      views: {
        'experiences': {
          templateUrl: 'views/experiences.html'
        }
      }
    })

    .state('resume.videos', {
      url: '/videos',
      views: {
        'videos': {
          templateUrl: 'views/videos.html'
        }
      }
    })

    .state('resume.images', {
      url: '/images',
      views: {
        'images': {
          templateUrl: 'views/images.html',
          controller: 'GalleryCtrl',
          controllerAs: 'gallery'
        }
      }
    })

    .state('resume.projects', {
      url: '/projects',
      views: {
        'projects': {
          templateUrl: 'views/projects.html'
        }
      }
    })

    .state('resume.hire', {
      url: '/hire-han',
      views: {
        'hire': {
          templateUrl: 'views/hire.html'
        }
      }
    });

  	$urlRouterProvider.otherwise('/');
  }]);
