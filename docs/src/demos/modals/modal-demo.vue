<template>
    <div class="row">
        <div class="col s12">
            <btn @click="toggleM1">Open Modal</btn>
            <modal :open="m1OpenStatus" :complete-callback="toggleM1">
                <modal-content>
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </modal-content>
                <modal-footer>
                    <btn @click="toggleM1" class="modal-action" type="flat">close</btn>
                </modal-footer>
            </modal>
        </div>
        <div class="col s12">
            <btn @click="toggleM2">Open Fixed Footer Modal</btn>
            <modal :open="m2OpenStatus" :complete-callback="toggleM2" fixed-footer>
                <modal-content>
                    <h4>Modal Header</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </modal-content>
                <modal-footer>
                    <btn @click="toggleM2" class="modal-action" type="flat">close</btn>
                </modal-footer>
            </modal>
        </div>
        <div class="col s12">
            <btn @click="toggleM3">Open Bottom Sheet Style Modal</btn>
            <modal :open="m3OpenStatus" :complete-callback="toggleM3" bottom-sheet>
                <modal-content>
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </modal-content>
                <modal-footer>
                    <btn @click="toggleM3" class="modal-action" type="flat">close</btn>
                </modal-footer>
            </modal>
        </div>
    </div>
</template>

<script>
    /**
     * @example modal demos
     * @for modal
     * @description
     */
    module.exports = {
        components: {
            'btn': require('material-ui-vue/components/buttons/button.vue'),
            'modal': require('material-ui-vue/components/modals/modal.vue'),
            'modal-content': require('material-ui-vue/components/modals/modal-content.vue'),
            'modal-footer': require('material-ui-vue/components/modals/modal-footer.vue'),
        },

        data: function() {
            return {
                m1OpenStatus: false,
                m2OpenStatus: false,
                m3OpenStatus: false
            };
        },

        methods: {
            toggleM1: function() {
                this.m1OpenStatus = !this.m1OpenStatus;
            },
            toggleM2: function() {
                this.m2OpenStatus = !this.m2OpenStatus;
            },
            toggleM3: function() {
                this.m3OpenStatus = !this.m3OpenStatus;
            }
        }
    };
</script>