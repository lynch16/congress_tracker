function address() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$validators.address = function (value) {
              return /^[a-zA-Z\s\d\/]*\d[a-zA-Z\s\d\/]*[\,]\s[a-zA-Z\s\d\/]*/.test(value);
            };
        }
    }
}

angular
    .module('app')
    .directive('address', address);
