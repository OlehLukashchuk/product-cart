<template>
   <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
            <Card
            v-for="product in inventory.slice(0,9)"
            :key="product.id"
            :info="product"
            @addToCart="addToCart"
            />
        </div>
      </main>
</template>

<script>
import food from '@/food.json'
import Card from '@/components/Cards.vue'
export default {
  name: 'Products',
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
