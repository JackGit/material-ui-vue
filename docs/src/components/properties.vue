<template>
    <div class="row">
        <div class="col s12">
            <h4 class="header">Props</h4>
            <table class="highlight">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="property in data">
                    <td>{{property.name}}</td>
                    <td>{{property.type}}</td>
                    <td>{{property.default}}</td>
                    <td>{{property.description}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            data: {
                type: Array,
                default: function() {
                    return [
                        {name: 'icon', type: 'String', description: 'icon position', default: 'empty'},
                        {name: 'icon-position', type: 'String', description: 'icon position', default: 'left'}
                    ];
                }
            }
        }
    };
</script>