angular.module('crm')
.controller('SigninController',['$http', function($http) {
  var vm = this;
  vm.email = '';
  vm.password = '';

  vm.signinUser = function() {
    var action = $http.post('/auth/signin', {
      email: vm.email,
      password: vm.password
    });

    action.then(function success(results) {
      return results.data;
    });
  };
}]);
