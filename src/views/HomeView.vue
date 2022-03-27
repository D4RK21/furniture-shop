<template>
  <the-header :bottom="true" />
  <main class="page-content">
    <section class="banner-block">
      <div class="container">
        <div class="banner-block--side">
          <img :src="require('@/assets/img/banner.jpg')" alt="" />
        </div>
        <the-product
          class="no-mobile"
          title="Угловой диван Атланта Люкс рогожка Malmo серый"
          price="32 999"
          oldPrice="39 999"
          sale="18"
          :img="require('@/assets/img/product1.jpg')"
          :retings="5"
          reviews="12 отзывов"
        />
      </div>
    </section>
    <section class="product-list">
      <div class="container" id="sofas">
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
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="beds">
        <div class="product-list--title">Кровати</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.beds"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="mattresses">
        <div class="product-list--title">Матрасы</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.mattresses"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="walls">
        <div class="product-list--title">Стенки</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.walls"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="cabinets">
        <div class="product-list--title">Шкафы</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.cabinets"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="kitchens">
        <div class="product-list--title">Кухни</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.kitchens"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="tables">
        <div class="product-list--title">Столы</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.tables"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="armchairs">
        <div class="product-list--title">Стулья</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.armchairs"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="chairs">
        <div class="product-list--title">Кресла</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.chairs"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="nightstands">
        <div class="product-list--title">Тумбы</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.nightstands"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="puffs">
        <div class="product-list--title">Пуфы</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.puffs"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="dressers">
        <div class="product-list--title">Комоды</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.dressers"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
          />
        </div>
      </div>
      <div class="container" id="sale">
        <div class="product-list--title">Распродажа</div>
        <div class="product-list--all">
          <the-product
            v-for="(item, index) in products.sale"
            :key="index"
            :title="item.title"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :sale="item.sale"
            :img="item.img"
            :retings="item.retings"
            :reviews="item.reviews"
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
import $ from "jquery";
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
  mounted() {
    $(document).ready(function () {
      $(".btn-product").click(function () {
        const imgContainer = $(this).parent().parent().find(".product-img");
        const img = $(this).parent().parent().find(".product-img").children();
        img
          .clone()
          // .offset({
          //   top: 0,
          //   left: 0,
          // })
          .css({ position: "fixed", "z-index": "1000" })
          .appendTo(imgContainer)
          .animate(
            {
              bottom: 0,
              left: 0,
              opacity: 0,
              width: 80,
              height: 60,
            },
            1500,
            function () {
              // $(this).remove();
            }
          );
      });
    });
  },
};
</script>
