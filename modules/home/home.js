angular.module('HomeModules',[])
	
	.config(function($stateProvider,$urlRouterProvider){

		      $stateProvider.state('home',{
               url:'/home',
               templateUrl:'./modules/home/home.html',
               controller:'HomeCtrl',
               css:'./modules/home/home.css'
          })

     })
     /*.service("Service",["$http",function($http){
          this.getdata = function(){
               return $http().get("./modules/home/home.json")
          }
     }])*/
	.controller('HomeCtrl',['$scope','$http',function($scope,$http){
         $http.get("./modules/home/home.json").success(function(s){
               $scope.arr = s;
         })
        /* var i = 0;
         setInterval(function(){
           document.
         },2000)*/
     }])