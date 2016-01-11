Space.messaging.Tracker.extend(Space.jobQueue, 'Trackers', {

  autorun() {
    this.meteor.subscribe('space-jobQueue-job-server-stats');
    this.meteor.subscribe('space-jobQueue-connected-workers');
  }

});
