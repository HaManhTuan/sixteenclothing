<template>
  <Contact/>
</template>

<script>
export default {
  metaInfo() {
    return {
      script: [
        {
          hid: 'stripe',
          vmid: 'stripe-contact',
          src: 'js/custom.js',
        }
      ]
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
