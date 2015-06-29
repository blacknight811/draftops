'use strict';

describe('Service: LobbyFactory', function () {

  // load the service's module
  beforeEach(module('appDraftopsApp'));

  // instantiate service
  var LobbyFactory;
  beforeEach(inject(function (_LobbyFactory_) {
    LobbyFactory = _LobbyFactory_;
  }));

  it('should do something', function () {
    expect(!!LobbyFactory).toBe(true);
  });

});
