'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
  .controller('MainCtrl', function (company) {

  	this.companyName = company;
  })

  .controller('ResumeCtrl', function (company, $location) {
  	
  	this.companyName = company;

  	this.isActive = function(currentRoute) {
  		console.log(currentRoute);
  		return currentRoute === $location.path();
  	}
  });
