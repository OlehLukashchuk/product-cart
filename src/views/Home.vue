<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>

  <main class="wrapper">
    <h2>Recommended</h2>

    <div class="recommended">
      <Card
      v-for="product in inventory.slice(0,3)"
      :key="product.id"
      :info="product"
      @addToCart="addToCart"
      />
    </div>
  </main>
</template>

<script>
import food from '../food.json'
import Card from '@/components/Cards.vue'

export default {
  name: 'Home',
  data () {
    return {
      inventory: food,
      itemQuantity: 0
    }
  },
  methods: {
    addToCart (count, id) {
      this.itemQuantity = this.inventory[id - 1].quantity
      if (!this.itemQuantity) {
        this.inventory[id - 1].quantity = 0
      }
      this.inventory[id - 1].quantity += count
      this.addToCard()
    }
  },
  components: {
    Card
  },
  props: ['addToCard']

}
</script>
