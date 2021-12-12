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
      <span>( {{cardTotal}} )</span>
    </button>
  </header>

  <Sidebar @toggleClick="toggleSidebar" @removeFromCart="getCardTotal" v-if="showSidebar"/>

  <router-view :addToCard="getCardTotal"/>
</template>

<script>
import Sidebar from './Sidebar.vue'
import food from '@/food.json'

export default {
  name: 'Header',
  data () {
    return {
      showSidebar: false,
      cardTotal: 0
    }
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    getCardTotal () {
      console.log(true)
      this.cardTotal = 0
      food.forEach(el => {
        if (el.quantity) {
          this.cardTotal += el.quantity
        }
      })
    }
  },
  components: {
    Sidebar
  }
}
</script>
