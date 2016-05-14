<template>
    <div>
        <raised-button label="raised button"></raised-button>
        <raised-button>slot label button</raised-button>
        <raised-button label="left icon button" icon="edit" icon-position="left"></raised-button>
        <raised-button label="right icon button" icon="edit" icon-position="right"></raised-button>
        <raised-button label="large button" large></raised-button>
        <raised-button label="disabled button" disabled></raised-button>
        <raised-button label="no waves effect button" :waves-effect="false"></raised-button>
        <raised-button label="no light waves button" :light-wave="false"></raised-button>
        <raised-button label="styled button" class="red black-text"></raised-button>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'raised-button': require('material-ui-vue/components/buttons/button.vue')
        }
    };
</script>