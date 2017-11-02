'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')

	.factory('TwitterService', ['$timeout', function ($timeout) {
		return {
			load: function () {
		  	if (typeof twttr === 'undefined') {
		  		(function() {
		  			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
		  		})();
		  	} else {
			  	$timeout = twttr.widgets.load();
		  	}
			}
		};
	}])

  .controller('MainCtrl', ['company', 'TwitterService', function (company, TwitterService) {
  	var vm 						= this;
  	vm.companyName 		= company;

  	TwitterService.load();
  }])

  .controller('ResumeCtrl', ['company', '$location', 'TwitterService', function (company, $location, TwitterService) {
  	var vm 						= this;
  	vm.companyName 		= company;
  	vm.blogPosts 			= false;
  	vm.blogMessage 		= 'Click to view its most popular blog posts.';

  	vm.toggleBlogPosts 	= function (message) {
  		vm.blogPosts 			= !vm.blogPosts;
  		if (message === 'Click to view its most popular blog posts.') {
  			vm.blogMessage 	= 'Click to close most popular blog posts.';
  		} else {
  			vm.blogMessage 	= 'Click to view its most popular blog posts.';
  		}
  	};

  	vm.isActive 			= function (currentRoute) {
  		return currentRoute === $location.path();
  	};

  	TwitterService.load();
  }])

  .controller('GalleryCtrl', [function () {
  	var vm 		= this;

  	vm.album 	= [
  		{ src: 'images/han/1.JPG'},
  		{ src: 'images/han/2.JPG'},
  		{ src: 'images/han/3.JPG'},
  		{ src: 'images/han/4.JPG'},
  		{ src: 'images/han/5.JPG'},
  		{ src: 'images/han/6.JPG'},
  		{ src: 'images/han/7.JPG'},
  		{ src: 'images/han/8.JPG'},
  		{ src: 'images/han/9.JPG'},
  		{ src: 'images/han/10.JPG'},
  		{ src: 'images/han/11.JPG'},
  		{ src: 'images/han/12.JPG'},
  		{ src: 'images/han/boston.jpg'},
  		{ src: 'images/han/ballpit.jpg'},
  		{ src: 'images/han/dance.jpg'},
  		{ src: 'images/han/newyears.jpg'},
  		{ src: 'images/han/dance.jpg'},
  		{ src: 'images/han/graduation.jpg'},
  		{ src: 'images/han/onstage.jpg'},
  		{ src: 'images/han/snapchat.jpg'},
  		{ src: 'images/han/ny.jpg'},
  		{ src: 'images/han/niece.jpg'}
  	];
  }])

  .controller('ProjectCtrl', ['$window', function ($window) {
  	var vm 					= this;

  	vm.glasshopper 	= [
  		{ src: 'images/glasshopperlogo.png'},
  		{ src: 'images/gh1.png'},
  		{ src: 'images/gh2.png'},
  		{ src: 'images/gh3.png'},
  		{ src: 'images/gh4.png'},
  		{ src: 'images/gh5.png'},
  		{ src: 'images/gh6.png'},
  		{ src: 'images/gh7.png'},
  		{ src: 'images/gh8.png'}
  	];

  	vm.circle 			= [
	  	{ src: 'images/c1.png'},
	  	{ src: 'images/c2.png'},
	  	{ src: 'images/c3.png'},
	  	{ src: 'images/c4.png'},
	  	{ src: 'images/c5.png'},
	  	{ src: 'images/c6.png'}
  	];

  	vm.sas					= [
	  	{ src: 'images/sas3.png'},
	  	{ src: 'images/sas1.png'},
	  	{ src: 'images/sas2.png'}
  	];

  	vm.glc 					= [
	  	{ src: 'images/glc6.png'},
	  	{ src: 'images/glc5.png'},
	  	{ src: 'images/glc4.png'},
	  	{ src: 'images/glc3.png'},
	  	{ src: 'images/glc2.png'},
	  	{ src: 'images/glc1.png'}
  	];

  	vm.hoop					= [
	  	{ src: 'images/hoop1.png'},
	  	{ src: 'images/hoop2.png'},
	  	{ src: 'images/hoop3.png'}
  	];

  	vm.can 					= [
	  	{ src: 'images/can1.png'},
	  	{ src: 'images/can2.png'},
	  	{ src: 'images/can3.png'}
  	];

  	vm.bae 					= [
	  	{ src: 'images/bae3.png'},
	  	{ src: 'images/bae2.png'},
	  	{ src: 'images/bae1.png'}
  	];

  	vm.openRepos 		= function () {
  		$window.open('https://github.com/hankim813/glasshopper-client', '_blank');
  		$window.open('https://github.com/hankim813/glasshopper', '_blank');
  	};

  }]);
