<template>
  <div class="dashboard">
    <div class="dashboard-content">
      <div class="container">
        <div class="row">
          <ul class="nav nav-tabs nav-justified">
            <li class="nav-item">
              <a class="nav-link" @click.prevent="setActive('product')" :class="{ active: isActive('product') }" href="#product">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="setActive('user')" :class="{ active: isActive('user') }" href="#user">User</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="setActive('contact')" :class="{ active: isActive('contact') }" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="tab-content py-3" id="myTabContent">
              <div class="tab-pane fade" :class="{ 'active show': isActive('product') }" id="product">
                <button type="button" class="btn btn-primary btn-add-pro" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i class="fa fa-plus"></i>
                </button>
                <table class="table table-bordered">
                  <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">#</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button class="btn btn-success">Edit</button>
                      <button class="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="tab-pane fade" :class="{ 'active show': isActive('user') }" id="user">
                <table class="table table-bordered">
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="tab-pane fade" :class="{ 'active show': isActive('contact') }" id="contact">
                <table class="table table-bordered">
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <form id="formAddPro" class="addPro-form" v-model="products">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <label>Product Name</label>
                        <input name="product_name" v-model="products.name" type="text" class="form-control" id="product_name" placeholder="Alibaba" required="">
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <label>Quantity</label>
                        <input name="quantity" type="number" v-model="products.quantity" class="form-control" id="quantity" placeholder="10" required="">
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <label>Price</label>
                        <input name="price" v-model="products.price" type="text" class="form-control" id="price" placeholder="1000000" required="">
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <label>Thumbnail</label>
                        <input name="thumbnail" type="text" v-model="products.thumbnail" class="form-control" id="thumbnail" placeholder="https://" required="">
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <label>Description</label>
                        <input name="description" v-model="products.description" type="text" class="form-control" id="description" placeholder="1000000" required="">
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click.prevent="addProduct">Add Product</button>
              </div>
            </div>
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
     activeItem: 'product',
     products: {}
   }
 },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    async addProduct() {
      await this.$axios.$post('https://sixteenclothing-6f315-default-rtdb.firebaseio.com/product.json', this.products).then((result) => {
        if(result && result.name ) {
          console.log(result)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .dashboard-content{
    padding: 100px 0px 130px 0px;
    .btn-add-pro{
      margin-bottom: 10px;
    }
    .addPro-form {
      label {
        font-size: 14px;
      }
        input {
          font-size: 14px;
          width: 100%;
          height: 44px;
          display: inline-block;
          line-height: 42px;
          border: 1px solid #eee;
          border-radius: 0px;
          margin-bottom: 30px;
        }
    }
  }
</style>
