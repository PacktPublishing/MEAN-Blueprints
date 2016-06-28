angular.module('crm')
.filter('NameEmailCompanyFilter', function() {
  'use strict';

  return function(items, filterValue) {
    if (!filterValue) return items;

    var matches = [];
    filterValue = filterValue.toLowerCase();
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var match = {
          name: item.name && item.name.toLowerCase().indexOf(filterValue) > -1,
          email: item.email && item.email.toLowerCase().indexOf(filterValue) > -1,
          company: item.company && item.company.toLowerCase().indexOf(filterValue) > -1
        };
        if (match.name || match.email || match.company) {
          matches.push(item);
        }
    }

    return matches;
  };
});
