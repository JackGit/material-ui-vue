var Vue = require('vue');
var Button = require('../../../src/components/buttons/button.vue');

describe('', function() {

    var vm;

    beforeEach(function () {
        vm =  new Vue({
            template: '<btn></btn>',
            replace: false,
            components: {
                'btn': Button
            }
        }).$mount('body');
    });


    it('button test 1', function() {
        expect(true).toBe(true);
    });

    it('button test 2', function() {
        expect(true).toBe(true);
    });
});