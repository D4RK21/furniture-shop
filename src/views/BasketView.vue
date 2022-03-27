<template>
  <the-header :bottom="false" />
  <main class="page-content">
    <section class="basket">
      <div class="section-title">Корзина</div>
      <div class="no-items" v-if="items.length === 0">
        <img :src="require('@/assets/img/cart-empty.svg')" class="no-items-logo" />
        <div class="no-items-text">В корзине нет товаров</div>
        <router-link to="/">
          <button type="button" class="btn-red">На главную</button>
        </router-link>
      </div>
      <div class="items" v-else>
        <basket-item
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :price="item.price"
          :oldPrice="item.oldPrice"
          :img="item.img"
          :count="1"
        />
      </div>
      <div class="summary" v-if="items.length != 0">
        <div class="summary-item">
          <span>Товары</span>
          <span>{{ totalSum }}&nbsp;₽</span>
        </div>
        <div class="summary-item">
          <span>Скидка по акции</span>
          <span>- 0 ₽</span>
        </div>
        <div class="summary-item bold">
          <span>Итого</span>
          <span>{{ totalSum }}&nbsp;₽</span>
        </div>
        <a href="#checkout" class="summary-btn">
          <button class="btn-red outlined summary-btn">Перейти к оформлению</button>
        </a>
      </div>
    </section>
    <section class="checkout" id="checkout" v-if="items.length != 0">
      <form>
        <div class="section-title">Оформление заказа</div>
        <div class="checkout-item">
          <div class="checkout-title">Способ доставки</div>
          <div class="checkout-row">
            <div class="input-choose-cont">
              <input
                type="text"
                class="checkout-input input-choose"
                :class="isCourier ? 'active' : ''"
                v-on:click="isCourier = true"
                value="Курьерская доставка"
                readonly
              />
              <div class="input-icon" v-if="isCourier">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="14px"
                  height="14px"
                  viewBox="0 0 78.369 78.369"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704   c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704   C78.477,17.894,78.477,18.586,78.049,19.015z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div class="input-choose-cont">
              <input
                type="text"
                class="checkout-input input-choose"
                :class="!isCourier ? 'active' : ''"
                v-on:click="isCourier = false"
                value="Самовывоз"
                readonly
              />
              <div class="input-icon" v-if="!isCourier">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="14px"
                  height="14px"
                  viewBox="0 0 78.369 78.369"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704   c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704   C78.477,17.894,78.477,18.586,78.049,19.015z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="checkout-item" v-if="isCourier">
          <div class="checkout-title">Адрес доставки</div>
          <div class="checkout-row">
            <input type="text" class="checkout-input" placeholder="Регион" :required="isCourier" />
            <input type="number" class="checkout-input" placeholder="Индекс (Необязательно)" />
          </div>
          <div class="checkout-row">
            <input type="text" class="checkout-input" placeholder="Город" :required="isCourier" />
          </div>
          <div class="checkout-row">
            <input type="text" class="checkout-input" placeholder="Улица" :required="isCourier" />
          </div>
        </div>
        <div class="checkout-item" v-else>
          <div class="checkout-title">Адрес пункта самовывоза</div>
          <div class="checkout-row">
            <input type="text" class="checkout-input" placeholder="Адрес" :required="!isCourier" />
          </div>
        </div>
        <div class="checkout-item">
          <div class="checkout-title">Контакты</div>
          <div class="checkout-row">
            <input type="tel" class="checkout-input" placeholder="Телефон" required />
            <input type="email" class="checkout-input" placeholder="Email" required />
          </div>
          <div class="checkout-row">
            <input type="text" class="checkout-input" placeholder="ФИО" required />
          </div>
        </div>
        <div class="summary-footer-cont">
          <div class="summary">
            <div class="summary-item">
              <span>Товары</span>
              <span>{{ totalSum }}&nbsp;₽</span>
            </div>
            <div class="summary-item">
              <span>Скидка по акции</span>
              <span>- 0 ₽</span>
            </div>
            <div class="summary-item bold">
              <span>Итого к оплате</span>
              <span>{{ totalSum }}&nbsp;₽</span>
            </div>
            <button type="submit" class="btn-red summary-btn">Оформить заказ</button>
            <div class="services">
              <div class="service-title">Услуги:</div>
              <div class="service">
                <span>Доставка</span>
                <span>2000 ₽</span>
              </div>
            </div>
          </div>
        </div>
        <div class="agreements">
          <div class="agreement">
            <label class="checkbox">
              <input type="checkbox" checked />
              <span class="danger"></span>
            </label>
            <span class="agreement-text">Я подтверждаю своё согласие на сбор и обработку персональных данных</span>
          </div>
          <div class="agreement">
            <label class="checkbox">
              <input type="checkbox" checked />
              <span class="danger"></span>
            </label>
            <span class="agreement-text"
              >Вы согласны получать все извещения и уведомления по Вашему заказу путем смс-уведомления, сообщений через
              приложение-мессенджер Viber на телефонный номер и электронную почту, указанные в разделе «Оформление заказа»?</span
            >
          </div>
          <div class="agreement">
            <label class="checkbox">
              <input type="checkbox" />
              <span class="danger"></span>
            </label>
            <span class="agreement-text"
              >Вы согласны получать информацию об акциях, скидках, интересных предложениях путем смс-уведомления, сообщений через
              приложение-мессенджер Viber на телефонный номер и электронную почту, указанные в разделе «Оформление заказа»?</span
            >
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import BasketItem from "@/components/BasketItem.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProducts"]),
  },
  components: {
    TheHeader,
    BasketItem,
  },
  data: () => {
    return {
      items: ["1"],
      totalSum: 0,
      isCourier: true,
    };
  },
  mounted() {
    this.items = this.getProducts;
    this.totalSum = 1000;
  },
};
</script>
