<template>
    <div class="row">
        <form class="col s12">
            <select-field class="col s12" label="single selection" :options="options"></select-field>
            <select-field class="col s12" label="multiple selection" :options="options" multiple></select-field>
            <select-field class="col s12" label="group selection" :group-options="groupOptions"></select-field>
            <select-field class="col s6" label="image selection style 1" :options="imageOptions" icons></select-field>
            <select-field class="col s6" label="image selection style 2" :options="imageOptions" icons icon-position="right"></select-field>
            <select-field class="col s12" label="disabled selection" :options="options" disabled></select-field>
        </form>
    </div>
</template>

<script>
    /**
     * @example select field demos
     * @for select-field
     * @description
     */
    module.exports = {
        components: {
            'select-field': require('material-ui-vue/components/forms/select-field.vue')
        },

        data: function() {
            return {
                options: [
                    {label: 'Choose your option', value: '', disabled: true, selected: true},
                    {label: 'Option 1', value: '01'},
                    {label: 'Option 2', value: '02'},
                    {label: 'Option 3', value: '03'}
                ],
                groupOptions: {
                    team1: [
                        {label: 'Option 1', value: 't01'},
                        {label: 'Option 2', value: 't02'}
                    ],
                    team2: [
                        {label: 'Option 1', value: 't11'},
                        {label: 'Option 2', value: 't12'}
                    ]
                },
                imageOptions: [
                    {label: 'Choose your option', value: '', disabled: true, selected: true},
                    {label: 'Option 1', value: '01', icon: 'http://materializecss.com/images/yuna.jpg'},
                    {label: 'Option 2', value: '02', icon: 'http://materializecss.com/images/yuna.jpg'},
                    {label: 'Option 3', value: '03', icon: 'http://materializecss.com/images/yuna.jpg'}
                ]
            };
        }
    };
</script>