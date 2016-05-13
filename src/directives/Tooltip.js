var Vue = require('vue');

/**
 * tooltip
 * @module directives/tooltip
 * @author Jack Yang
 * @description Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function
 */
Vue.directive('tooltip', {
    bind: function() {

    },
    update: function(value) {
        var options = {
            /**
             * @prop delay
             * @type {Number}
             * @default 350
             * @description delay of showing the tooltip
             */
            delay: value.delay || 350,
            /**
             * @prop position
             * @type {String}
             * @default 'bottom'
             * @description position of the tooltip. Possible values: 'bottom', 'top', 'right' and 'left'
             */
            position: value.position || 'bottom'
        };

        this.el.dataset['tooltip'] = value.text;
        $(this.el).tooltip(options);
    },
    unbind: function() {
        $(this.el).tooltip('remove');
    }
});