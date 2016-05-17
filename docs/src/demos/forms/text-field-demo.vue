<template>
    <div class="row">
        <form class="col s12">
            <div class="row">
                <text-field class="col s6" placeholder="Placeholder" label="First Name"></text-field>
                <text-field class="col s6" placeholder="Placeholder" label="Last Name"></text-field>
            </div>
            <div class="row">
                <text-field class="col s12" value="I am not editable" label="disabled field" disabled></text-field>
            </div>
            <div class="row">
                <text-field class="col s12" type="password" label="password"></text-field>
            </div>
            <div class="row">
                <text-field class="col s12" type="email"
                            label="email with validation"
                            icon="email"
                            value="yg@email.com"
                            error-message="wrong email"
                            success-message="correct email"
                            validate>
                </text-field>
            </div>
        </form>
    </div>
</template>

<script>
    /**
     * @example text-field demos
     * @for text-field
     * @description
     */
    module.exports = {
        components: {
            'text-field': require('material-ui-vue/components/forms/text-field.vue')
        }
    }
</script>