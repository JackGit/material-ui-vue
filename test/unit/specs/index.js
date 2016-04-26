describe("A suite", function() {

    beforeEach(function() {
        var link = document.createElement('link');
        link.href = "http://fonts.googleapis.com/icon?family=Material+Icons";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    });

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

});

// require all test files
var testsContext = require.context('.', true, /_spec$/);
testsContext.keys().forEach(testsContext);