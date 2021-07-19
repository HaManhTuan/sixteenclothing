<template>
  <Main/>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'js/custom.js', type: "text/javascript", defer: true},
      ]
    }
  }
  // metaInfo() {
  //   return {
  //     script: [
  //       // { src: 'js/jquery.js', type: "text/javascript", vmid: 'stripe-home'},
  //       { src: 'js/custom.js', type: "text/javascript", vmid: 'custom', defer: true},
  //       // { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js', type: "text/javascript", vmid: 'stripe-home'},
  //       // { src: 'js/owl.js', type: "text/javascript", vmid: 'stripe-home'},
  //       // { src: 'js/slick.js', type: "text/javascript", vmid: 'stripe-home'},
  //       // { src: 'js/isotope.js', type: "text/javascript", vmid: 'stripe-home'},
  //       // { src: 'js/accordions.js', type: "text/javascript", vmid: 'stripe-home'}
  //     ]
  //   }
  // }
}
</script>
