<template>
    <span>
        <btn class="dropdown-button" href="#" :data-activates="id"
             :label="label"
             :icon="icon"
             :icon-position="iconPosition"
             :large="large"
             :waves-effect="false"
             :light-wave="false"
             :disabled="false"></btn>
        <ul v-if="items.length > 0" class="dropdown-content" :id="id">
            <li v-for="item in items" :class="item.divider ? 'divider' : ''">
                <a v-if="!item.divider" :href="item.href">{{item.text}}</a>
            </li>
        </ul>
        <slot v-if="items.length === 0"></slot>
    </span>
</template>

<script>
    var uuid = require('uuid');
    var ButtonMixin = require('../mixins/ButtonMixin.js');

    module.exports = {
        mixins: [ButtonMixin],

        components: {
            btn: require('../buttons/button.vue')
        },

        props: {
            items: {
                type: Array,
                default: []
            },
            inDuration: {
                type: Number,
                default: 300
            },
            outDuration: {
                type: Number,
                default: 225
            },
            constrainWidth: {
                type: Boolean,
                default: true
            },
            hover: {
                type: Boolean,
                default: false
            },
            gutter: {
                type: Number,
                default: 0
            },
            belowOrigin: {
                type: Boolean,
                default: false
            },
            alignment: {
                type: String,
                default: 'left'
            }
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