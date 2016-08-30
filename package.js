Package.describe({
  name: 'xunyangjian:meteor-account-wechat',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'meteor accout login by wechat on mobile and web',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/xunyangjian/meteor-account-wechat',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');

  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'random', 'service-configuration'], ['client', 'server']);
  api.use(['templating'], 'client');

  api.use(['underscore', 'random']);
   api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.export('MeteorWeChat');//
  api.export('MeteorWebWeChat');

  api.addFiles('webwechat_server.js', 'server');
  api.addFiles('webwechat_browser.js','web.browser');
 
  api.addFiles('wechat_cordova.js', 'web.cordova');
  api.addFiles('wechat_server.js','server');
  
  api.addFiles('wechat.js','client');
 
  api.addFiles(['wechat_configure.html'], 'client');
  // api.mainModule('meteor-account-wechat.js');

});

Cordova.depends({
  'cordova-plugin-wechat': '1.1.2'
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('meteor-account-wechat');
//   api.mainModule('meteor-account-wechat-tests.js');
// });
