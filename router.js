var myapp=angular.module("myapp",['ngRoute']);
myapp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
    	templateUrl:'views/public.html'
    }).when('/shopCar',{
    	templateUrl:'views/shopCar.html',
    	controller:"shopCar"
    });
}]);
