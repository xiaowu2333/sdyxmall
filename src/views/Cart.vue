<template>
  <div class="cart">
    <cart-header></cart-header>
    <cart-card></cart-card>
    <cart-bottom></cart-bottom>

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CartHeader from "@/components/cart/CartHeader.vue";
import CartCard from "@/components/cart/CartCard.vue";
import CartBottom from "@/components/cart/CartBottom.vue";

export default {
  mounted() {
    this.updateNewShoppingNum(0);
  },
  components: {
    "cart-header": CartHeader,
    "cart-card": CartCard,
    "cart-bottom": CartBottom
  },
  methods: {
    ...mapMutations("cart", {
      updateNewShoppingNum: "updateNewShoppingNum"
    })
  }
};
</script>

<style>
</style>