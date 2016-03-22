<template>
    <span>
        <a class="dropdown-button btn" href="#" :data-activates="id">{{label}}</a>
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

    module.exports = {
        props: {
            label: {
                type: String
            },
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

        ready: function() {
            var $el = $(this.$el);

            // for <slot> case
            $el.find('ul').addClass('dropdown-content').attr('id', this.id);

            // init dropdown
            $el.find('.dropdown-button').dropdown({
                inDuration: this.inDuration,
                outDuration: this.outDuration,
                constrain_width: this.constrainWidth,
                hover: this.hover,
                gutter: this.gutter,
                belowOrigin: this.belowOrigin,
                alignment: this.alignment
            });
        }
    };
</script>