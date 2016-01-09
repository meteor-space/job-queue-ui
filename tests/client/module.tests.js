describe("Space.jobQueue", function () {

  Meteor.settings = { public: {
    space: { jobQueue: { collectionName: 'space_jobQueue_jobs' } }
  }};

  MyApp = Space.Application.define('MyApp', {
    requiredModules: ['Space.jobQueue']
  });

  describe("Initialization", function () {

    beforeEach(function () {
      this.myApp = new MyApp()
    });

    afterEach(function () {
      this.myApp.reset();
    });

    it("makes injector mappings", function () {
      expect(this.myApp.injector.get('JobCollection')).to.exist
      expect(this.myApp.injector.get('Space.jobQueue.Jobs')).to.exist
      expect(this.myApp.injector.get('Space.jobQueue.ConnectedWorkers')).to.exist
    });

  });

});
