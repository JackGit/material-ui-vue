<template>
  <a class="btn">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'raised' // raised, flat
      }
    }
  }
</script>
