Package.describe({
  summary: 'Non-view UI elements for managing the Space Job Queue',
  name: 'space:job-queue-ui',
  version: '0.1.0',
  git: 'https://github.com/meteor-space/job-queue-ui',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'mongo',
    'ecmascript',
    'underscore',
    'space:base@3.2.1',
    'space:flux@0.6.1',
    'vsivsi:job-collection@1.2.3'
  ], 'client');

  api.addFiles([
    'source/client/module.js',
    'source/client/job-server.js',
    'source/client/trackers.js',
    'source/client/job-queue-store.js'
  ],'client');

});

Package.onTest(function(api) {

  api.use([
    'mongo',
    'ecmascript',
    'practicalmeteor:mocha@2.1.0',
    'space:base@3.2.1',
    'space:job-queue-ui',
    'space:testing@2.0.1'
  ], 'client');

  api.addFiles([
    'tests/client/test-app.js',
    'tests/client/module.tests.js'
  ], 'client');

});
