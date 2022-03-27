<template>
  <div class="product">
    <div class="product-container">
      <div class="product-img">
        <img :src="img" alt="" />
      </div>
      <div class="product-title">{{ title }}</div>
      <div class="product-price">
        <span class="price">{{ price }}<span>&nbsp;₽</span></span
        ><span class="product-sale">-{{ sale }}%</span><span class="old-price">{{ oldPrice }}<span>&nbsp;₽</span></span>
      </div>
      <div class="product-ratings">
        <span v-for="(reting, index) in retings" :key="index">★</span>
        <div class="reviews-ratings">{{ reviews }}</div>
      </div>
      <div class="product-btn">
        <button type="button" class="btn-red btn-product">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "sale", "oldPrice", "img", "retings", "reviews"],
};
</script>

<style></style>
