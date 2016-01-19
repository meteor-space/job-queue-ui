Meteor.settings = { public: {
  space: { jobQueue: { collectionName: 'space_jobQueue_jobs' } }
}};

MyApp = Space.Application.define('MyApp', {
  requiredModules: [
    'Space.jobQueue'
  ]
});
