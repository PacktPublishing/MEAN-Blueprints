/**
 * The main CRM app module
 *
 * @type {angular.Module}
 */
angular.module('crm', ['ngRoute', 'xeditable'])
.config(function ($routeProvider, $filterProvider) {
  'use strict';

  $routeProvider
  .when('/signin', {
    controller: 'SigninController',
    templateUrl: 'js/views/signin.html',
    controllerAs: 'vmSignin'
  })
  .when('/contacts', {
    controller: 'ContactController',
    templateUrl: 'js/views/contacts.html',
    controllerAs: 'vmContacts'
  })
  .otherwise({
    redirectTo: '/signin'
  });
});