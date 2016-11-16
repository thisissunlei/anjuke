angular.module('BanModules',[])

     .config(function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise('ban');
          $stateProvider.state('fangjia.ban',{
               url:'/ban',
               templateUrl:'./modules/fangjia/bankuai/bankuai.html',
               controller:'BanCtrl',
               css:'./modules/fangjia/bankuai/bankuai.css'
          })
          

     })
           .controller('BanCtrl',['$scope',function($scope){
          
          }]);
   