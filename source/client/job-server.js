Space.Object.extend(Space.jobQueue, 'JobServer', {

  dependencies: {
    injector: 'Injector',
    meteor: 'Meteor',
    mongo: 'Mongo',
    jobCollection: 'JobCollection'
  },

  onDependenciesReady() {
    this._setupJobCollection();
    this._setupJobServerStatsCollection();
    this._setupConnectedWorkersCollection();
    Space.Object.prototype.onDependenciesReady.call(this);
  },

  _setupJobCollection() {
    let collection;
    if(Space.jobQueue.JobServer._jobCollection) {
      collection = Space.jobQueue.JobServer._jobCollection
    } else {
      let collectionName = this.meteor.settings.public.space.jobQueue.collectionName;
      collection = this.jobCollection(collectionName);
      Space.jobQueue.JobServer._jobCollection = collection;
    }
    this.injector.map('Space.jobQueue.Jobs').to(collection);
  },

  _setupJobServerStatsCollection() {
    // Current jobServer instance state
    let collection;
    if(Space.jobQueue.JobServer._jobServerStats) {
      collection = Space.jobQueue.JobServer._jobServerStats
    } else {
      collection = new this.mongo.Collection('space_jobQueue_jobServerStats');
      Space.jobQueue.JobServer._jobServerStats = collection;
    }
    this.injector.map('Space.jobQueue.JobServerStats').to(collection);
  },

  _setupConnectedWorkersCollection() {
    // Worker clients connected to all job server instances
    let collection;
    if(Space.jobQueue.JobServer._connectedWorkers) {
      collection = Space.jobQueue.JobServer._connectedWorkers
    } else {
      collection = new this.mongo.Collection('space_jobQueue_connectedClients');
      Space.jobQueue.JobServer._connectedWorkers = collection;
    }
    this.injector.map('Space.jobQueue.ConnectedWorkers').to(collection);
  }

});
