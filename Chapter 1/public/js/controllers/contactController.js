angular.module('crm')
.controller('ContactController', ['$filter', 'Contact', function($filter, Contact) {
  var vm = this;

  vm.contacts = [];
  vm.filteredContacts = [];
  vm.searchText = '';

  vm.addContact = function(contact) {
    Contact.create(contact).then(function success(result) {
      vm.contacts.push(result.data);
      filterContacts(vm.searchText);
    });
  };

  vm.saveContact = function(contact, id) {
    angular.extend(contact, {_id: id});
    return Contact.update(contact);
  };

  vm.deleteContact = function(id) {
    Contact.remove(id).then(function success(result) {
      for (var i = 0; i < vm.contacts.length; i++) {
        if (vm.contacts[i]._id === id) {
          vm.contacts.splice(i, 1);
          break;
        }
      }
      filterContacts(vm.searchText);
    });
  };

  vm.searchTextChanged = function() {
    filterContacts(vm.searchText);
  };

  function filterContacts(filterText) {
    vm.filteredContacts = $filter('NameEmailCompanyFilter')(vm.contacts, filterText);
  }

  function init() {
    Contact.getAll().then(function success(results) {
      vm.contacts = results.data;
      // launch initial filtering
      filterContacts('');
    });
  }

  init();
}]);
