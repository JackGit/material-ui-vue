<template>
    <div :class="divClasses">
        <img :src="src" :class="imgClasses">
        <card-title v-if="title" :title="title"></card-title>
        <!-- this slot can be put as styled card title -->
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'card-title': require('./card-title.vue')
        },

        props: {
            src: {
                type: String,
                required: true
            },
            title: {
                type: String
            },
            activator: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            var divClasses = ['card-image'];
            var imgClasses = [];

            if(this.activator) {
                divClasses.push('waves-effect');
                divClasses.push('waves-block');
                divClasses.push('waves-light');
                imgClasses.push('activator');
            }

            return {
                divClasses: divClasses,
                imgClasses: imgClasses
            }
        }
    };
</script>