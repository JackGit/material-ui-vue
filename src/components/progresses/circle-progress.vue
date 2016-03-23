<template>
    <div :class="wrapperClasses">
        <div v-for="cl in colors" :class="['spinner-layer', colors.length === 1 ? 'spinner-' + cl + '-only' : 'spinner-' + cl]">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div>
            <div class="gap-patch">
                <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>

<script>
    var classes = require('../../Util.js').classes;
    // red, blue, yellow, green

    module.exports = {
        props: {
            size: {
                type: String,
                default: '' // '', big, small
            },
            active: {
                type: Boolean,
                default: true
            },
            color: {
                type: String,
                default: 'red'
            },
            flash: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                wrapperClasses: classes({
                    'preloader-wrapper': true,
                    'big': this.size === 'big',
                    'small': this.size === 'small',
                    'active': this.active
                }),
                colors: this.flash ? ['blue','red','yellow','green'] : [this.color]
            };
        }
    };
</script>