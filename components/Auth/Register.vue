<template>
  <div class="register-content">
    <div class="page-heading about-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h4>login</h4>
              <h2>our company</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="best-features about-features">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="contact-form">
              <form id="login" v-model="registerUser">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" v-model="registerUser.name" type="text" class="form-control" id="name" placeholder="Full Name" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" v-model="registerUser.email" type="text" class="form-control" id="email" placeholder="E-Mail Address" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="username" v-model="registerUser.username" type="text" class="form-control" id="username" placeholder="Username" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="address" v-model="registerUser.address" rows="6" class="form-control" id="address" placeholder="Your Address" required=""></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="filled-button" @click.prevent="submitHandle">Register</button>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <div class="not-account">
                      <small>If you have account ?</small>
                      <NuxtLink to="/login" class="register-link">
                        Login
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </form></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    registerUser: {}
  }
}
}
</script>

<style scoped>

</style>
