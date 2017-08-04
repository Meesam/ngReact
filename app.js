var app=angular.module('app',['react']);

app.controller('helloController', ['$scope',function($scope) {
  $scope.person = [{ fname: 'Meesam', lname: 'Zaidi',contactInfo:[{email:'a'},{email:'c'},{email:'d'}] },
    { fname: 'Shashank', lname: 'Barnawal',contactInfo:[{email:'s'},{email:'b'}] }]
}]);


