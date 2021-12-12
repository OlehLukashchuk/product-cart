<template>
  <div class="card">
    <div class="card-title">{{ info.name }}</div>
    <div class="card-body">
      <i :class="getImage()"></i>
      <form>
        <div class="row">
          <div class="cell">
            <label>Type:</label>
          </div>
          <div class="cell">
            <em>{{ info.type }}</em>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Price:</label>
          </div>
          <div class="cell">${{ info.price.USD }}</div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Quantity:</label>
          </div>
          <div class="cell">
            <input type="number" v-model.number="count"/>
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <button @click="addToCart" class="btn btn-light">
        Add to cart
      </button>
    </div>
  </div>
</template>
<script>
import food from '@/food.json'
export default {
  name: 'Card',
  data () {
    return {
      inventory: food,
      count: 0
    }
  },

  methods: {
    addToCart () {
      this.$emit('addToCart', this.count, this.info.id)
    },
    getImage () {
      return 'icofont-10x icofont-' + this.info.icon
    }
  },
  props: ['info']

}
</script>
