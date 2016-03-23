<template>
    <div class="{{containerClasses}}">
        <div class="{{barClasses}}" :style="{width: percentage + '%'}"></div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            determinate: {
                type: Boolean,
                default: false
            },
            percentage: {
                default: 0
            },
            color: {
                type: String,
                default: ''
            },
            backgroundColor: {
                type: String,
                default: ''
            }
        },

        data: function() {
            return {
                containerClasses: 'progress ' + this.backgroundColor,
                barClasses: (this.determinate ? 'determinate' : 'indeterminate') + ' ' + this.color
            }
        }
    }
</script>