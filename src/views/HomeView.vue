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
            v-for="item in products.sofas"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.beds"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.mattresses"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.walls"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.cabinets"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.kitchens"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.tables"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.armchairs"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.chairs"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.nightstands"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.puffs"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.dressers"
            :key="item.id"
            :id="item.id"
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
            v-for="item in products.sale"
            :key="item.id"
            :id="item.id"
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
        const cart = $(".basket-container");
        const img = $(this).parent().parent().find(".product-img").children();
        img
          .clone()
          .offset({
            top: img.offset().top,
            left: img.offset().left,
          })
          .css({
            opacity: "0.5",
            width: "270px",
            height: "150px",
            position: "absolute",
            "z-index": "100",
          })
          .appendTo($("body"))
          .animate(
            {
              top: cart.offset().top + 10,
              left: cart.offset().left + 10,
              opacity: 0,
              width: 70,
              height: 50,
            },
            800,
            function () {
              $(this).remove();
            }
          );
      });
    });
  },
};
</script>
