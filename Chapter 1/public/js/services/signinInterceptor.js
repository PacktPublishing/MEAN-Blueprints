angular.module('crm')
.factory('SiginInterceptor', ['$q', '$location', function($q, $location) {
  return {
    response: function(response) {
      return response;
    },
    responseError: function(rejection) {
      if (401 === rejection.status) {
        //$window.location = '/auth/login';
        $location.path('/signin');
      }

      return $q.reject(rejection);
    }
  };
}])
.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('SiginInterceptor');
}]);