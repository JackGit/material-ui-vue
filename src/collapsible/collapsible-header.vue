<template>
    <div :class="['collapsible-header', active ? 'active' : '']">
        <mui-icon v-if="icon" :value="icon" :class="iconPosition"></mui-icon>
        {{label}}
    </div>
</template>

<script>
    module.exports = {
        components: {
            'mui-icon': require('../icons/icon.vue')
        },

        props: {
            label: {
                type: String
            },
            icon: {
                type: String
            },
            iconPosition: {
                type: String,
                default: 'left'
            },
            active: {
                type: Boolean,
                default: false
            }
        }
    };
</script>