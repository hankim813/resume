'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
  .controller('MainCtrl', ['company', function (company) {
  	var vm = this;
  	vm.companyName = company;
  }])

  .controller('ResumeCtrl', ['company', '$location', function (company, $location) {
  	var vm = this;
  	vm.companyName = company;

  	vm.isActive = function(currentRoute) {
  		return currentRoute === $location.path();
  	};
  }])

  .controller('GalleryCtrl', [function () {
  	var vm = this;

  	vm.album = [
  		{ src: 'images/han/onstage.jpg'},
  		{ src: 'images/han/boston.jpg'},
  		{ src: 'images/han/lovedogs.jpg'},
  		{ src: 'images/han/han.jpg'},
  		{ src: 'images/han/santa.jpg'},
  		{ src: 'images/han/newyears.jpg'},
  		{ src: 'images/han/classphoto.jpg'},
  		{ src: 'images/han/capecodbeach.jpg'},
  		{ src: 'images/han/6.jpg'},
  		{ src: 'images/han/selfie.jpg'},
  		{ src: 'images/han/dance.jpg'},
  		{ src: 'images/han/graduation.jpg'},
  		{ src: 'images/han/snapchat.jpg'},
  		{ src: 'images/han/gumbo.jpg'},
  		{ src: 'images/han/capecod.jpg'},
  		{ src: 'images/han/malaysia.jpg'},
  		{ src: 'images/han/niece.jpg'}
  	];


  }]);
