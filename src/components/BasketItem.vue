<template>
  <div class="backet-item">
    <div class="backet-item--img">
      <img :src="img" alt="" />
    </div>
    <div class="backet-item--title">
      <span>{{ title }}</span>
      <button @click="deleteProduct">Удалить</button>
    </div>
    <div class="backet-item--prices">
      <div class="item-prices--col">
        <div class="prices-col-new">{{ price }}&nbsp;₽</div>
        <div class="prices-col-old">{{ oldPrice }}&nbsp;₽</div>
      </div>
      <div class="item-prices--count">{{ count }} шт.</div>
      <div class="item-prices--resprice">
        <span>{{ Number(priceNum) * count }}</span
        >&nbsp;₽
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["id", "img", "title", "price", "oldPrice", "count"],
  methods: {
    ...mapMutations(["dellProduct"]),
    deleteProduct() {
      this.dellProduct(this.id);
    },
  },
  data: () => {
    return {
      priceNum: 0,
    };
  },
  mounted() {
    this.priceNum = this.price.replace(" ", "");
  },
};
</script>
