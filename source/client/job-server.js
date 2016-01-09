Space.jobQueue.JobServer = Space.Object.extend(Space.jobQueue, 'JobServer', {

  dependencies: {
    injector: 'Injector',
    meteor: 'Meteor',
    mongo: 'Mongo',
    jobCollection: 'JobCollection'
  },

  _jobCollection: null,
  _connectedWorkers: null,

  onDependenciesReady() {
    this._setupJobCollection();
    this._setupConnectedWorkersCollection();
    Space.Object.prototype.onDependenciesReady.call(this);
  },

  _setupJobCollection() {
    let Collection;
    if(Space.jobQueue.JobServer._jobCollection) {
      Collection = Space.jobQueue.JobServer._jobCollection
    } else {
      let collectionName = this.meteor.settings.public.space.jobQueue.collectionName;
      Collection = this.jobCollection(collectionName);
      Space.jobQueue.JobServer._jobCollection = Collection;
    }
    this.injector.map('Space.jobQueue.Jobs').to(Collection);
  },

  _setupConnectedWorkersCollection() {
    let Collection;
    if(Space.jobQueue.JobServer._connectedWorkers) {
      Collection = Space.jobQueue.JobServer._connectedWorkers
    } else {
      Collection = new this.mongo.Collection('space_jobQueue_connectedClients');
      Space.jobQueue.JobServer._connectedWorkers = Collection;
    }
    this.injector.map('Space.jobQueue.ConnectedWorkers').to(Collection);
  }

});
