Space.flux.Store.extend(Space.jobQueue, 'JobQueueStore', {

  dependencies: {
    connectedWorkers: 'Space.jobQueue.ConnectedWorkers'
  },

  onDependenciesReady() {
    this.meteor.subscribe('space-jobQueue-connected-workers');
  }

});
