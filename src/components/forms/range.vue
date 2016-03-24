<template>
    <p class="range-field">
        <input type="range"
               v-el:input
               v-model="value"
               :min="min"
               :max="max"
               :disabled="disabled" />
    </p>
</template>

<script>
    module.exports = {
        props: {
            min: {
                default: 0
            },
            max: {
                default: 100
            },
            value: {
                default: 50
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },

        ready: function() {
            for(var p in this.$els.input) {
                if(p.startsWith('on')) {
                    $(this.$els.input).on(p.substring(2), function(e) {
                        this.$dispatch('range-' + e.type, e);
                    }.bind(this));
                }
            }
        }
    };
</script>