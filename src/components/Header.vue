<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/pastOrders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <button @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart (0)</span>
    </button>
  </header>

  <Sidebar @toggleClick="toggleSidebar" v-if="showSidebar"/>

  <router-view />
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: 'Header',
  data () {
    return {
      showSidebar: false
    }
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  },
  components: {
    Sidebar
  }
}
</script>
