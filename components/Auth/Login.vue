<template>
  <div class="login-content">
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
          <div class="col-md-6">
            <div class="contact-form">
            <form id="login" action="" method="post">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="username" type="text" class="form-control" id="username" placeholder="Username" required="">
                  </fieldset>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="password" type="password" class="form-control" id="password" placeholder="*********" required="">
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" class="filled-button" @click.prevent="submitHandle">Login</button>
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <div class="not-account">
                    <small>If you have not account ?</small>
                    <NuxtLink to="register" class="register-link">
                      Register
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
  methods: {
    submitHandle() {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped lang="scss">
  .not-account {
    margin-top: 20px;
  }
  .register-link {
    color: #f33f3f;
  }
</style>
