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

  .controller('ResumeCtrl', function (company) {
  	
  	this.companyName = company;
  });
