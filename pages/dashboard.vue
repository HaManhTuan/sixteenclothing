<template>
  <div>
    <Dashboard/>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      script: [
        { hid:'stripe', src: 'js/jquery.js', async: true, defer: true, vmid: 'stripe-dashboard'},
        { hid:'stripe',src: 'js/bootstrap.bundle.js', async: true, defer: true, vmid: 'stripe-dashboard'},
        { src: 'js/custom.js', type: "text/javascript", vmid: 'stripe-dashboard'},
        { hid:'stripe',src: 'js/owl.js', async: true, defer: true, vmid: 'stripe-dashboard'},
        { hid:'stripe',src: 'js/slick.js', async: true, defer: true, vmid: 'stripe-dashboard'},
        { hid:'stripe',src: 'js/isotope.js', async: true, defer: true, vmid: 'stripe-dashboard'},
        { hid:'stripe',src: 'js/accordions.js', async: true, defer: true, vmid: 'stripe-dashboard'},
        { hid:'stripe',src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js', async: true, defer: true, vmid: 'stripe-dashboard'},
        { hid:'stripe',src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',async: true, defer: true, vmid: 'stripe-dashboard'},
        { hid:'stripe',src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', async: true, defer: true, vmid: 'stripe-dashboard'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
