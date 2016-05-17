<template>
    <pre>
        <code :class="['language-' + type]">
            {{code}}
        </code>
    </pre>
</template>

<script>
    module.exports = {
        props: {
            type: {
                type: String,
                default: 'markup'
            },
            code: {
                type: String,
                default: ''
            }
        },

        ready: function() {
            Prism.highlightAll();
        }
    };
</script>