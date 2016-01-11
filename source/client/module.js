Space.jobQueue = Space.Module.define('Space.jobQueue', {

  requiredModules: [
    'Space.flux'
  ],

  singletons: [
    'Space.jobQueue.JobServer',
    'Space.jobQueue.Trackers'
  ],

  stores: [
    'Space.jobQueue.JobQueueStore'
  ],

  onInitialize() {
    this.injector.map('JobCollection').to(JobCollection);
  }

});
