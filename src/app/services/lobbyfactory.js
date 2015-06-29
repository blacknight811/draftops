'use strict';

/**
 * @ngdoc service
 * @name appDraftopsApp.LobbyFactory
 * @description
 * # LobbyFactory
 * Factory in the appDraftopsApp.
 */
angular.module('appDraftops')
  .factory('LobbyFactory', ['$http','$q',function ($http,$q) {
    // Service logic
    // ...

    var baseUrl = 'https://api.draftops.com/api/contests/getlobby';

    // Public API here
    return {
      getLobby: function (params) {
        params = params || {};
        var deferred = $q.defer();
        $http.get(baseUrl, {params: params})
          .success(function (res) {
            //console.log(res);
            deferred.resolve(res.Data)
        })
          .error(function (err) {
            deferred.reject(err.body.error)
        });
        return deferred.promise;
      }
    };
  }]);
