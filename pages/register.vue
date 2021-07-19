<template>
  <Auth-Register/>
</template>

<script>
export default {
  metaInfo() {
    return {
      script: [
        {
          hid: 'stripe',
          vmid: 'stripe-register',
          src: 'js/custom.js',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
