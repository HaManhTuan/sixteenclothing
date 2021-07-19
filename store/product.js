export const state = () => ({
  products: [],
  product: {}
})

export const mutations = {
  GET_PRODUCTS(state, products) {
    state.products = products
  }
}

export const actions = {
  getProducts({commit}, products) {
    commit('GET_PRODUCTS', products)
  }
}

export const getters = {
  allProducts(state) {
    return state.products
  }
}
