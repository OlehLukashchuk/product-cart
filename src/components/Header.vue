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
    <button href="#" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart (0)</span>
    </button>
  </header>
  <router-view />
</template>

<script>
export default {
  name: 'Header'
}
</script>
