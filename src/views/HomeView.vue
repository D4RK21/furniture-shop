<template>
  <the-header />
  <main class="page-content">
    <section class="banner-block">
      <div class="container">
        <div class="banner-block--side">
          <img :src="require('@/assets/img/banner.jpg')" alt="" />
        </div>
        <the-product />
      </div>
    </section>
    <section class="product-list">
      <div class="container">
        <div class="product-list--title">Диваны</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.sofas"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheProduct from "@/components/TheProduct.vue";
import products from "@/config/product";
export default {
  components: {
    TheProduct,
    TheHeader,
  },
  data: () => {
    return {
      products: products,
    };
  },
};
</script>
