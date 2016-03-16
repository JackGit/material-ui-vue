<template>
    <div :class="['collapsible-header', active ? 'active' : '']">
        <mui-icon v-if="icon" :value="icon"></mui-icon>
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
            active: {
                type: Boolean,
                default: false
            }
        }
    };
</script>