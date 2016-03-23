var Vue = require('vue');

Vue.directive('tooltip', {
    bind: function() {

    },
    update: function(value) {
        console.log('update', value)
        var options = {
            delay: value.delay || 350,
            position: value.position || 'bottom'
        };

        this.el.dataset['tooltip'] = value.text;
        $(this.el).tooltip(options);
    },
    unbind: function() {
        $(this.el).tooltip('remove');
    }
});