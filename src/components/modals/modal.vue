<template>
    <div :class="modalClasses">
        <slot></slot>
    </div>
</template>

<script>
    var classes = require('../../Util.js').classes;

    /**
     * modal
     * @module modals/modal
     * @author Jack Yang
     * @description Use a {@link http://materializecss.com/modals.html modal} for dialog boxes, confirmation messages, or other content that can be called up. In order for the modal to work you have to add the Modal ID to the link of the trigger
     */
    module.exports = {
        props: {
            /**
             * @prop opacity
             * @type {Number}
             * @default 0.5
             * @description opacity of modal background
             */
            opacity: {
                default: 0.5
            },
            /**
             * @prop inDuration
             * @type {Number}
             * @default 350
             * @description transition in duration
             */
            inDuration: {
                default: 350
            },
            /**
             * @prop outDuration
             * @type {Number}
             * @default 250
             * @description transition out duration
             */
            outDuration: {
                default: 250
            },
            /**
             * @prop readyCallback
             * @type {Function}
             * @default null
             * @description callback for Modal open
             */
            readyCallback: {
                type: Function,
                default: null
            },
            /**
             * @prop completeCallback
             * @type {Function}
             * @default null
             * @description callback for Modal close
             */
            completeCallback: {
                type: Function,
                default: null
            },
            /**
             * @prop dismissible
             * @type {Boolean}
             * @default true
             * @description modal can be dismissed by clicking outside of the modal
             */
            dismissible: {
                type: Boolean,
                default: true
            },
            /**
             * @prop fixedFooter
             * @type {Boolean}
             * @default false
             * @description set true, if you have content that is very long and you want the action buttons to be visible all the time
             */
            fixedFooter: {
                type: Boolean,
                default: false
            },
            /**
             * @prop bottomSheet
             * @type {Boolean}
             * @default false
             * @description bottom Sheet Modals are good for displaying actions to the user on the bottom of a screen. They still act the same as regular modals
             */
            bottomSheet: {
                type: Boolean,
                default: false
            },
            /**
             * @prop open
             * @type {Boolean}
             * @default false
             * @description the model open status
             */
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

        /* these are all private methods, no need to expose to users */
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