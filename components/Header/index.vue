<template>
  <header class="">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#"><h2>Sixteen <em>Clothing</em></h2></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <NuxtLink to="/">
              <span class="nav-link">Home
              </span>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/product">
                <span class="nav-link">Our Products</span>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about">
                <span class="nav-link">About Us</span>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact">
                <span class="nav-link">Contact Us</span>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/login">
                <span class="nav-link">Login</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
