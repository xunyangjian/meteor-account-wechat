// 用户整合
Accounts.onCreateUser(function (options, user) {
    if (options.profile) {
        user.profile = options.profile;
    }

    if(user.services.hasOwnProperty("wechat")){
      user.services.webwechat = user.services.wechat;
      return user;
    }else if (user.services.hasOwnProperty("webwechat")){
      user.services.wechat = user.services.webwechat;
      return user;
    }else {
      return user;
    }
});