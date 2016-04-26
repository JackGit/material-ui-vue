var Vue = require('vue');
var Icon = require('../../../src/components/icons/icon.vue');

describe('Button Spec', function() {

    var vm;

    beforeEach(function () {
       vm =  new Vue({
            template: '<icon value="edit">',
            replace: false,
            components: {
                'icon': Icon
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