<style>

</style>

<template>
    <div class="input-field">
        <icon v-if="icon"
              :class="['prefix', labelActive ? 'active' : '']"
              :value="icon"></icon>

        <textarea v-el:text-area
                  :id="id"
                  class="materialize-textarea">{{value}}</textarea>

        <label :for="id" :class="value ? 'active' : ''">{{label}}</label>
    </div>
</template>

<script>
    var uuid = require('uuid');

    module.exports = {
        components: {
            'icon': require('../icons/icon.vue')
        },

        props: {
            label: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            icon: {
                type: String
            }
        },

        data: function() {
            return {
                id: uuid.v1(),
                labelActive: false
            };
        },

        ready: function() {
            for(var p in this.$els.textArea) {
                if(p.startsWith('on')) {
                    $(this.$els.textArea).on(p.substring(2), function(e) {
                        this.$dispatch('text-area-' + e.type, e);
                    }.bind(this));
                }
            }
        },

        events: {
            'text-area-focus': function() {
                this.labelActive = true;
                return true;
            },
            'text-area-blur': function() {
                this.labelActive = false;
                return true;
            }
        }
    };

</script>