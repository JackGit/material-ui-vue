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

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});