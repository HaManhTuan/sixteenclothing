<template>
  <Product/>
</template>

<script>
import Product from '~/components/Product'
export default {
  components: {
    Product
  },
  head() {
    return {
      script: [
        { src: 'js/custom.js', type: "text/javascript", hid:'custom-pro'},
      ]
    }
  },
  // metaInfo() {
  //   return {
  //     script: [
  //       { src: 'js/jquery.js', module: "text/javascript", vmid: 'stripe-home'},
  //       { src: 'js/custom.js', module: "text/javascript", vmid: 'stripe-home'},
  //       { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js', type: "text/javascript", vmid: 'stripe-home'},
  //       { src: 'js/owl.js', module: "text/javascript", vmid: 'stripe-home'},
  //       { src: 'js/slick.js', module: "text/javascript", vmid: 'stripe-home'},
  //       { src: 'js/isotope.js', module: "text/javascript", vmid: 'stripe-home'},
  //       { src: 'js/accordions.js', module: "text/javascript", vmid: 'stripe-home'}
  //     ]
  //   }
  // },
  data() {
    return {

    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
