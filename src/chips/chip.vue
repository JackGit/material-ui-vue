<template>
    <div class="chip">
        <img v-if="image" :src="image">
        {{label}}
        <icon v-if="removable" value="close"></icon>
    </div>
</template>

<script>
    module.exports = {
        components: {
            icon: require('../icons/icon.vue')
        },

        props: {
            label: {
                type: String,
                default: ''
            },
            removable: {
                type: Boolean,
                default: false
            },
            image: {
                type: String,
                default: ''
            }
        }
    };
</script>