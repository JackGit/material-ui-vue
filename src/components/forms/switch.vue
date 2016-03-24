<template>
    <div class="switch">
        <label>
            {{leftLabel}}
            <input v-el:input type="checkbox" v-model="value" :disabled="disabled">
            <span class="lever"></span>
            {{rightLabel}}
        </label>
    </div>
</template>

<script>
    module.exports = {
        props: {
            rightLabel: {
                type: String,
                default: ''
            },
            leftLabel: {
                type: String,
                default: ''
            },
            value: {
                type: Boolean,
                default: false
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
                        this.$dispatch('switch-' + e.type, e);
                    }.bind(this));
                }
            }
        },
    }
</script>