<style>
    .date-picker-active-label {
        font-size: 0.8rem !important;
        transform: translateY(-140%);
    }
</style>

<template>
    <div class="input-field">
        <icon v-if="icon"
              class="prefix"
              :value="icon"></icon>

        <input v-el:input type="date" class="datepicker" :id="id" :disabled="disabled">
        <label :for="id" class="date-picker-active-label">{{label}}</label>
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
            icon: {
                type: String,
                default: ''
            },
            date: {
                default: function() {return new Date();}
            },
            pickerOptions: {
                type: Object,
                default: function() {return {};}
            },
            opened: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                picker: null,
                id: uuid.v1()
            }
        },

        watch: {
            opened: function(value) {
                if(value)
                    this.open();
                else
                    this.close();
            },
            date: function(value) {
                this.picker.set('select', value);
            }
        },

        ready: function() {
            var $input = $(this.$els.input).pickadate(this.pickerOptions);
            var that = this;

            this.picker = $input.pickadate('picker');

            this.picker.on({
                open: function() {
                    that.opened = true;
                },
                close: function() {
                    that.opened = false;
                },
                set: function(thingSet) {
                    if(thingSet.select)
                        that.date = thingSet.select;
                }
            });

            this.picker.set('select', this.date);
        },

        methods: {
            open: function() {
                this.picker.open();
            },
            close: function() {
                this.picker.close();
            }
        },

        destroyed: function() {
            if(!this.picker)
                return;

            ['open','close','render','stop','set'].forEach(function(event) {
                this.picker.off(event);
            }.bind(this));

            this.picker.stop();
        }
    };
</script>