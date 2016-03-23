<template>
    <div :class="modalClasses">
        <slot></slot>
    </div>
</template>

<script>
    var classes = require('../../Util.js').classes;

    module.exports = {
        props: {
            opacity: {
                default: 0.5
            },
            inDuration: {
                default: 350
            },
            outDuration: {
                default: 250
            },
            readyCallback: {
                type: Function,
                default: undefined
            },
            completeCallback: {
                type: Function,
                default: undefined
            },
            dismissible: {
                type: Boolean,
                default: true
            },
            fixedFooter: {
                type: Boolean,
                default: false
            },
            bottomSheet: {
                type: Boolean,
                default: false
            },
            open: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                modalClasses: classes({
                    'modal': true,
                    'modal-fixed-footer': this.fixedFooter,
                    'bottom-sheet': this.bottomSheet
                }),
                modalOptions: {
                    opacity: this.opacity,
                    in_duration: this.inDuration,
                    out_duration: this.outDuration,
                    ready: this.handleReady.bind(this),
                    complete: this.handleComplete.bind(this),
                    dismissible: this.dismissible
                },
                status: 'closed'
            }
        },

        watch: {
            open: function(value) {
                if(value)
                    this.openModal();
                else
                    this.closeModal();
            }
        },

        ready: function() {
            if(this.open)
                this.openModal();
        },

        methods: {
            openModal: function() {
                $(this.$el).openModal(this.modalOptions);
            },
            closeModal: function() {
                $(this.$el).closeModal();
            },
            handleReady: function() {
                this.status = 'open';
                this.readyCallback && this.readyCallback.call(null);
            },
            handleComplete: function() {
                this.status = 'closed';
                this.completeCallback && this.completeCallback.call(null);
            }
        }

    };
</script>