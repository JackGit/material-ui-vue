<template>
    <div :class="[fixed ? 'navbar-fixed' : '']">
        <nav>
            <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                        <input v-el:input :id="id" type="search" required :placeholder="placeholder" :value="value">
                        <label :for="id"><icon value="search"></icon></label>
                        <icon value="close" @click="close"></icon>
                    </div>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    var uuid = require('uuid');

    module.exports = {
        components: {
            icon: require('../icons/icon.vue')
        },

        props: {
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            fixed: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                id: uuid.v1()
            };
        },

        ready: function() {
            for(var p in this.$els.input) {
                if(p.startsWith('on')) {
                    $(this.$els.input).on(p.substring(2), function(e) {
                        this.$dispatch('search-bar-' + e.type, e);
                    }.bind(this));
                }
            }
        },

        methods: {
            close: function() {
                this.$dispatch('search-bar-close');
            }
        }
    };
</script>