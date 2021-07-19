<template>
  <Auth-Login/>
</template>

<script>
export default {
  metaInfo() {
    return {
      script: [
        {
          hid: 'stripe',
          vmid: 'stripe-login',
          src: 'js/custom.js',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
