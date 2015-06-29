'use strict';

angular.module('appDraftops')
  .controller('MainCtrl', ['$scope','$http','LobbyFactory',function ($scope,$http,LobbyFactory) {

    $scope.isLoggedIn = false;
    $scope.loading = false;
    $scope.guaranteedTooltip = "Guaranteed to take place regardless of number of entrants.";

    $scope.toggleLoginState = function () {
      $scope.isLoggedIn = !$scope.isLoggedIn;
    };

    $scope.getData = function () {
      $scope.loading = true;
      LobbyFactory.getLobby().then(
        function (res) {
          $scope.contests = res;

          $scope.contests.forEach(function (contest) {
            if(contest.MaxEntries === 0){
              contest.MaxEntries = '--';
            }
          })
        },
        function (err) {
          $scope.messsage = 'There was error retrieving the missions';
        }
      ).finally(function () {
          $scope.loading = false;
          $scope.checkWidth();
        });
    };

    $scope.getData();

    var viewport = $(window).width();

    $scope.checkWidth = function(){
      if(viewport < 768){
        $('.mission-data').removeClass('text-right');
      }
    };

    $(window).resize(function () {
      if(viewport < 768){
        $('.mission-data').removeClass('text-right');
      }
    });
  }]);
