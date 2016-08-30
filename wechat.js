 Accounts.oauth.registerService('webwechat');

if (Meteor.isClient) {
  //web wechat login 
  Meteor.loginWithWebWeChat = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    MeteorWebWeChat.requestCredential(options, credentialRequestCompleteCallback);
  };

  Meteor.loginWithWeChat = function(options, callback){
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    MeteorWeChat.requestCredential(options, credentialRequestCompleteCallback);
  };

} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: _.map(
      MeteorWebWeChat.whitelistedFields.concat(['accessToken', 'expiresAt']), // don't publish refresh token
      function (subfield) { return 'services.webwechat.' + subfield; }
    ),

    forOtherUsers: _.map(
      MeteorWebWeChat.whitelistedFields,
      function (subfield) { return 'services.webwechat.' + subfield; }
    ),

    forLoggedInUser: _.map(
      MeteorWeChat.whitelistedFields.concat(['accessToken', 'expiresAt']), // don't publish refresh token
      function (subfield) { return 'services.wechat.' + subfield; }
    ),

    forOtherUsers: _.map(
      MeteorWeChat.whitelistedFields,
      function (subfield) { return 'services.wechat.' + subfield; }
    )
  });
}