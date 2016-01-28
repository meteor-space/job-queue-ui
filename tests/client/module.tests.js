describe("Space.jobQueue", function() {

  beforeEach(function() {
    this.myApp = new MyApp();
  });

  afterEach(function() {
    this.myApp.reset();
  });

  describe("Initialization", function() {

    it("makes injector mappings", function() {
      expect(this.myApp.injector.get('JobCollection')).to.exist
      expect(this.myApp.injector.get('Space.jobQueue.Jobs')).to.exist
      expect(this.myApp.injector.get('Space.jobQueue.JobServerStats')).to.exist
      expect(this.myApp.injector.get('Space.jobQueue.ConnectedWorkers')).to.exist
    });

  });

});
