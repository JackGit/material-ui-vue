<template>
    <div class="row">
        <div class="col s12">
            <h4 class="header">Methods</h4>
            <table class="highlight">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Parameters</th>
                    <th>Returns</th>
                    <th>Description</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="method in data">
                    <td>{{method.name}}</td>
                    <td>{{method.parameters}}</td>
                    <td>{{method.returns}}</td>
                    <td>{{method.description}}</td>
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
                        {name: 'init', description: 'init component', parameters: '', returns: ''},
                        {name: 'destroy', description: 'destroy component', parameters: '', returns: ''}
                    ];
                }
            }
        }
    };
</script>