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
          :key="products.sofas[0].id"
          :id="products.sofas[0].id"
          :title="products.sofas[0].title"
          :price="products.sofas[0].price"
          :oldPrice="products.sofas[0].oldPrice"
          :sale="products.sofas[0].sale"
          :img="products.sofas[0].img"
          :retings="products.sofas[0].retings"
          :reviews="products.sofas[0].reviews"
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
    <section class="contact" id="contact">
      <div class="container">
        <div class="contact-text">
          <div class="contact-title">
            <h1>Контакты Много Мебели</h1>
          </div>
          <div class="contact-desc">
            <p>Есть вопросы или хотите сообщить о проблеме с продуктом или сервисом Много Мебели? Мы всегда рады помочь.</p>
          </div>
        </div>
      </div>
      <div class="contacts-info">
        <div class="container">
          <ul class="contacts-ul">
            <li>
              <h2>Центральный офис Много Мебели</h2>
              <p>Саратовская область, Саратовский район, с. Клещевка, литер Г2.</p>
            </li>
            <li>
              <h2>Адреса салонов</h2>
              <p>Узнайте адрес ближайшего к вам салона Много Мебели.</p>
            </li>
            <li>
              <h2>Телефон и эл. почта</h2>
              <p>
                <a href="tel:84956422030&nbsp;">8 <span>(</span>495<span>)</span> 642-20-30&nbsp;</a>
                - ежедневно c 07:00 до 21:00. Email: <a href="mailto:zakaz@mnogomebeli.com">zakaz@mnogomebeli.com</a>
              </p>
            </li>
            <li>
              <h2>Чат</h2>
              <p>Наши сотрудники отвечают на ваши вопросы ежедневно с 07:00 до 19:00 по Москве.</p>
            </li>
            <li>
              <h2>Юридический адрес</h2>
              <p>ООО "Много Мебели", Россия, 410531, Саратовская область, с. Клещевка, литер Г2.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="warranty" id="warranty">
      <div class="container">
        <div class="contact-text">
          <div class="contact-title">
            <h1>Гарантия</h1>
          </div>
          <div class="contact-desc">
            <p>
              Мы заботимся о своих покупателях, предлагая им купить качественную мебель из безопасных материалов и комплектующих.
              Все детали и комплектующие мебели изготовлены на европейском оборудовании и проходят строгий контроль качества.
            </p>
          </div>
        </div>
      </div>
      <div class="contacts-info">
        <div class="container">
          <ul class="contacts-ul warranty-ul">
            <li>
              <h2>Наша гарантия</h2>
              <p>
                - Срок гарантии на Мебель от 18 до 36 месяцев;<br />
                - Мебель производят наши собственные фабрики, а также надёжные фабрики-партнёры, поэтому мы уверены в её
                качестве!<br />
                - При изготовлении Мебели обязательно проводится 7-ступенчатый контроль качества на всех этапах производства!<br />
                - Для изготовления нашей Мебели применяются лучшие материалы и комплектующие!<br />
                - Наши фабрики-производители сотрудничают только с проверенными поставщиками, выбирая только безопасные
                комплектующие и материалы для производства Мебели.<br />
              </p>
            </li>
            <li>
              <h2>Возврат товара надлежащего качества</h2>
              <p>
                &nbsp; &nbsp;В случае, если товар не подошёл по форме, габаритам, фасону, расцветке, размеру или комплектации
                (перечень причин для обмена закрытый) у Вас есть 14 дней после приёмки товара на подачу заявления на его обмен на
                аналогичный при соблюдении следующих условий:<br />
                - товар не был в употреблении, не подвергался сборке, ничего не испачкано и не сломано (сохранен товарный вид и
                потребительские свойства);<br />
                - сохранены маркировки и фабричные ярлыки (этикетки) товара;<br />
                - в наличии кассовый чек, подтверждающий оплату товара (в том числе в электронном виде), либо (при отсутствии
                чека) Вы можете доказать, что покупали товар именно в нашем интернет-магазине (знаете номер и дату Вашего
                интернет-заказа);<br />
                <br />
                &nbsp; &nbsp;Подать заявку на обмен товара можно одним из следующих способов:<br />
                - позвонить на горячую линию по номеру телефона, указанному в шапке сайта;<br />
                - заполнить форму специальную форму на сайте интернет-магазина «Заявка на сервис» в разделе «Гарантия»;<br />
                - написать письмо на электронную почту <a href="mailto:online@groupx.ru">online@groupx.ru</a>.<br />
                <br />
                &nbsp; &nbsp;В случае, если желаемый Вами аналогичный товар отсутствует в продаже, и замена не может быть
                произведена, Вы вправе отказаться от товара и потребовать возврата уплаченной за указанный товар денежной суммы на
                тех же условиях, что предусмотрены для обмена товара надлежащего качества.<br />
                <br />
              </p>
            </li>
            <li>
              <h2>Возврат товара ненадлежащего качества</h2>
              <p>
                &nbsp; &nbsp;Если в течение гарантийного срока с функционалом или качеством товара возникла проблема, или если в
                процессе эксплуатации были выявлены скрытые недостатки, которые при приёмке обнаружить было невозможно, Вы можете
                подать заявку на сервисное обслуживание/ремонт, либо предоставление скидки на дефект (соразмерное уменьшение
                цены), либо возврат товара ненадлежащего качества. При этом важно учесть:<br />
                - Гарантийный срок указывается в условиях продажи и на маркировке товара;<br />
                - Механические повреждения товара, возникшие в ходе самостоятельной доставки / подъёма / сборки, неправильной
                эксплуатации, не попадают под гарантию!<br />
                <br />
                &nbsp; &nbsp;Подать заявку на можно одним из следующих способов:<br />
                - позвонить на горячую линию по номеру телефона, указанному в шапке сайта;<br />
                - заполнить форму специальную форму на сайте интернет-магазина «Заявка на сервис» в разделе «Гарантия»;<br />
                - написать письмо на электронную почту <a href="mailto:online@groupx.ru">online@groupx.ru</a>.
              </p>
            </li>
            <li>
              <h2>Действия при приёмке товара</h2>
              <p>
                - В момент приёмки товара Вы должны провести его осмотр по количеству и качеству: внимательно осмотреть внешний
                вид товара, количество комплектующих, деталей, их качество и состояние на соответствие интернет-заказу и
                сопроводительным документам.<br />
                - Если Вы обнаружили несоответствие товара интернет-заказу, Вы вправе отказаться от его приёма и подписания Акта
                приёма-передачи (АПП), и ожидать согласования новой доставки. Стоимость услуг доставки в таком случае не
                оплачивается;<br />
                - Если к товару нет замечаний, но Вы просто передумали его брать, Вы вправе отказаться от него при приёмке, но в
                этом случае Вами оплачивается его доставка непосредственному исполнителю (курьеру) в месте приёмки.<br />
                - Состояние товара при отсутствии к нему замечаний отражается в п.2 (АПП). Если Вас всё устраивает, и Вы
                принимаете товар, то подписываете Акт приёма-передачи (АПП) без замечаний и комментариев с указанием даты
                фактической приёмки товара и подписания акта.<br />
                <br />
                <b><span style="color: #ff0000">Внимание!!!</span></b> Расписываясь в Акте приёма-передачи товара при получении,
                Вы соглашаетесь с тем, что товар, указанный в Акте, доставлен в полном объёме и надлежащего качества. Если Акт
                приема-передачи подписан со стороны покупателя, то претензии по качеству и внешнему виду (явным недостаткам),
                количеству, комплектации товара не принимаются. Все претензии к товару после подписания акта рассматриваются
                только в рамках гарантийных случаев по скрытым производственным недостаткам (которые не могли быть обнаружены в
                процессе приёмки), выявленным в процессе эксплуатации.
              </p>
            </li>
          </ul>
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
