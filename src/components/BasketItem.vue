<template>
  <div class="backet-item">
    <div class="backet-item--img">
      <img :src="img" alt="" />
    </div>
    <div class="backet-item--title">
      <span>{{ title }}</span>
      <button>Удалить</button>
    </div>
    <div class="backet-item--prices">
      <div class="item-prices--col">
        <div class="prices-col-new">{{ price }}&nbsp;₽</div>
        <div class="prices-col-old">{{ oldPrice }}&nbsp;₽</div>
      </div>
      <div class="item-prices--count">{{ count }} шт.</div>
      <div class="item-prices--resprice">
        <span>{{ price }}</span
        >&nbsp;₽
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "title", "price", "oldPrice", "count"],
};
</script>
