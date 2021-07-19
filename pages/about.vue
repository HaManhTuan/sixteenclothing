<template>
  <About/>
</template>

<script>
export default {
  metaInfo() {
    return {
      script: [
        {
          hid: 'stripe',
          vmid: 'stripe-about',
          src: 'js/custom.js',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
