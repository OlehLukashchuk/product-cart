<template>
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button @click="closeSidebar" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product,i) in inventory.filter(product => product.quantity > 0)" :key="i">
              <td><i :class="getImage(product)"></i></td>
              <td>{{ product.name }}</td>
              <td>${{ product.price.USD}} </td>
              <td class="center">{{ product.quantity }}</td>
              <td v-text="getTotal(product)"></td>
              <td class="center">
                <button class="btn btn-light cart-remove" @click="removeItem(product)">&times;</button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center" v-if="inventory.filter(product => product.quantity > 0).length === 0"><em>No items in cart</em></p>
        <div class="spread">
          <span><strong>Total:</strong> ${{getTotalProductsPrice()}}</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import food from '@/food.json'
export default {
  name: 'Sidebar',
  data () {
    return {
      inventory: food
    }
  },
  methods: {
    closeSidebar () {
      this.$emit('toggleClick')
    },
    getImage (product) {
      return 'icofont-4x icofont-' + product.icon
    },
    getTotal (product) {
      const total = (product.price.USD * product.quantity).toFixed(2)
      product.totalPrice = total
      return '$' + total
    },
    getTotalProductsPrice () {
      let finalPrice = 0
      for (let i = 0; i < this.inventory.length; i++) {
        const item = this.inventory[i].totalPrice
        if (item) {
          finalPrice += parseFloat(item)
        }
      }
      return finalPrice.toFixed(2)
    },
    removeItem (product) {
      product.quantity = 0
      this.$emit('removeFromCart')
    }
  }
}
</script>
