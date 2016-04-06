var Vue = require('vue');

describe("A suite", function() {
    var Button = require('../../../src/components/buttons/fixed-action-button.vue');
    var vm = new Vue({
        template: '<btn></btn>',
        replace: false,
        components: {
            'btn': Button
        }
    }).$mount('body');

    var h = document.createElement('h1');
    h.innerText = 'demo';
    document.body.appendChild(h);

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    console.log($('#mountNode').length);
});

// require all test files
var testsContext = require.context('.', true, /_spec$/);
testsContext.keys().forEach(testsContext);