<template>
    <span>
        <btn class="dropdown-button" href="#!" :data-activates="id"
             :type="type"
             :label="label"
             :icon="icon"
             :icon-position="iconPosition"
             :large="large"
             :waves-effect="false"
             :light-wave="false"
             :disabled="false"></btn>
        <ul v-if="items.length > 0" class="dropdown-content" :id="id">
            <li v-for="item in items" :class="item.divider ? 'divider' : ''">
                <a v-if="!item.divider" :href="item.href">{{item.label}}<badge v-if="item.badge" :label="item.badge.label" :new="item.badge.new"></badge></a>
            </li>
        </ul>
        <slot></slot>
    </span>
</template>

<script>
    var uuid = require('uuid');
    var ButtonPropMixin = require('../../mixins/ButtonPropMixin.js');
    var DropdownPropMixin = require('../../mixins/DropdownPropMixin.js');

    /**
     * dropdown
     * @module dropdown/dropdown
     * @author Jack Yang
     * @description Add a {@link http://materializecss.com/dropdown.html dropdown} list to any button. These button props can't be changed for a dropdown: waves-effect, light-wave and disabled.
     */
    module.exports = {
        /**
         * @prop label
         * @type {String}
         * @default ''
         * @description label of this button
         */

        /**
         * @prop type
         * @type {String}
         * @default ''
         * @description type of this button. '': raised button, by default. 'flat': flat button. 'floating': floating button
         */

        /**
         * @prop large
         * @type {Boolean}
         * @default false
         * @description set this prop as true to let this button has a larger height for buttons that need more attention
         */

        /**
         * @prop icon
         * @type {String}
         * @default ''
         * @description icon of this button
         */

        /**
         * @prop iconPosition
         * @type {String}
         * @default 'left'
         * @description icon position of the button icon. Possible values: 'left', 'right'
         */

        /**
         * @prop wavesEffect
         * @type {Boolean}
         * @default true
         * @description apple the waves effect of the button
         */

        /**
         * @prop lightWave
         * @type {Boolean}
         * @default true
         * @description apply the light-style waves effect to the button
         */

        /**
         * @prop
         * @type {Boolean}
         * @default false
         * @description indicate the button is disabled or not
         */

        /**
         * @prop items
         * @type {Array}
         * @default function() {return [];}
         * @description example value: [{href: '#!', label: 'item 1', badge: {label: '1', new: true}}, {href: '#!', label: 'item 2'}, {divider: true}]
         */

        /**
         * @prop inDuration
         * @type {Number}
         * @default 300
         * @description the duration of the transition enter in milliseconds
         */

        /**
         * @prop outDuration
         * @type {Number}
         * @default 225
         * @description the duration of the transition out in milliseconds
         */

        /**
         * @prop constrainWidth
         * @type {Boolean}
         * @default true
         * @description if true, constrainWidth to the size of the dropdown activator
         */

        /**
         * @prop hover
         * @type {Boolean}
         * @default true
         * @description if true, the dropdown will open on hover
         */

        /**
         * @prop gutter
         * @type {Number}
         * @default 0
         * @description this defines the spacing from the aligned edge
         */

        /**
         * @prop belowOrigin
         * @type {Boolean}
         * @default false
         * @description if true, the dropdown will show below the activator
         */

        /**
         * @prop alignment
         * @type {String}
         * @default 'left'
         * @description defines the edge the menu is aligned to. Possible values: 'left', 'right'
         */
        mixins: [ButtonPropMixin, DropdownPropMixin],

        components: {
            btn: require('../buttons/button.vue'),
            badge: require('../badges/badge.vue')
        },

        data: function() {
            return {
                id: uuid.v1()
            }
        },

        watch: {
            items: {
                handler: function() {
                    this.initDropdown();
                },
                deep: true
            },
            inDuration: function() {
                this.initDropdown();
            },
            outDuration: function() {
                this.initDropdown();
            },
            constrainWidth: function() {
                this.initDropdown();
            },
            hover: function() {
                this.initDropdown();
            },
            gutter: function() {
                this.initDropdown();
            },
            belowOrigin: function() {
                this.initDropdown();
            },
            alignment: function() {
                this.initDropdown();
            }
        },

        ready: function() {
            $(this.$el).find('ul').addClass('dropdown-content').attr('id', this.id);// for <slot> case
            this.initDropdown();
        },

        methods: {
            initDropdown: function() {
                // init dropdown
                $(this.$el).find('.dropdown-button').dropdown({
                    inDuration: this.inDuration,
                    outDuration: this.outDuration,
                    constrain_width: this.constrainWidth,
                    hover: this.hover,
                    gutter: this.gutter,
                    belowOrigin: this.belowOrigin,
                    alignment: this.alignment
                });
            }
        }
    };
</script>