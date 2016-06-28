angular.module('crm')
.factory('Contact', ['$http', function($http) {
  'use strict';

  var serviceBase = '/contacts';
  var factory = {};

  factory.create = function(contact) {
    var action = $http.post(serviceBase, contact);

    action.then(function success(results) {
      return results.data;
    });

    return action;
  };

  factory.get = function(id) {
    var action = $http.get(serviceBase + '/' + id);

    action.then(function success(results) {
      return results.data;
    });

    return action;
  };

  factory.getAll = function(start, count) {
    var action = $http.get(serviceBase);

    action.then(function success(results) {
      return results.data;
    });

    return action;
  };

  factory.update = function(contact) {
    var action = $http.put(serviceBase + '/' + contact._id, contact);

    action.then(function success(results) {
      return results.data;
    });

    return action;

  };

  factory.remove = function(id) {
    var action = $http.delete(serviceBase + '/' + id);

    action.then(function success(results) {
      return results.data;
    });

    return action;
  };

  return factory;
}]);
