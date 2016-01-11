Space.flux.Store.extend(Space.jobQueue, 'JobQueueStore', {

  dependencies: {
    jobServerStats: 'Space.jobQueue.JobServerStats',
    connectedWorkers: 'Space.jobQueue.ConnectedWorkers'
  },

  reactiveVars() {
    return [{
      isOff: true,
      connectedWorkersQty: null,
      stats: null
    }];
  },

  computations() {
    return [
      this._updateServerStats,
      this._updateConnectedWorkersCount
    ];
  },

  _updateServerStats() {
    let stats = this.jobServerStats.findOne(1);
    let isOff = stats && stats.stopped;
    this._setReactiveVar('isOff', isOff);
    this._setReactiveVar('stats', stats);
  },

  _updateConnectedWorkersCount() {
    let qty = this.connectedWorkers.find().count();
    this._setReactiveVar('connectedWorkersQty', qty);
  }

});
