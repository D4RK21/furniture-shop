<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-logo">
          <img :src="require('@/assets/img/logo.svg')" alt="" />
        </div>
        <div class="header-buttons">
          <button type="button" class="btn-red">Акции</button>
        </div>
      </div>
      <div class="container">
        <div class="basket-container">
          <svg>
            <path
              d="M7.656 18.668a2.506 2.506 0 1 0 0 5.01 2.506 2.506 0 0 0 0-5.01zm0 3.897a1.392 1.392 0 1 1 0-2.784 1.392 1.392 0 0 1 0 2.784zM18.235 18.668a2.506 2.506 0 1 0 0 5.01 2.506 2.506 0 0 0 0-5.01zm0 3.897a1.392 1.392 0 1 1 0-2.784 1.392 1.392 0 0 1 0 2.784zM23.887 4.052a.696.696 0 0 0-.446-.223L5.317 3.58l-.5-1.532A2.561 2.561 0 0 0 2.421.321H.557a.557.557 0 1 0 0 1.114h1.865a1.448 1.448 0 0 1 1.336.974l3.536 10.663-.278.64c-.31.8-.218 1.702.25 2.422a2.59 2.59 0 0 0 2.088 1.17h10.83a.557.557 0 1 0 0-1.114H9.354a1.42 1.42 0 0 1-1.17-.668c-.249-.4-.3-.893-.138-1.337l.222-.5 11.721-1.226a3.063 3.063 0 0 0 2.645-2.338l1.336-5.596a.473.473 0 0 0-.083-.473zM21.548 9.87c-.18.812-.87 1.41-1.698 1.476L8.268 12.543 5.68 4.693l17.066.25-1.197 4.927z"
            ></path>
          </svg>
          <span>Корзина</span>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="header-bottom--inner">
          <ul class="header-bottom--links">
            <li class="header-bottom--link">Диваны</li>
            <li class="header-bottom--link">Кровати</li>
            <li class="header-bottom--link">Матрасы</li>
            <li class="header-bottom--link">Стенки</li>
            <li class="header-bottom--link">Шкафы</li>
            <li class="header-bottom--link">Кухни</li>
            <li class="header-bottom--link">Столы</li>
            <li class="header-bottom--link">Стулья</li>
            <li class="header-bottom--link">Кресла</li>
            <li class="header-bottom--link">Тумбы</li>
            <li class="header-bottom--link">Пуфы</li>
            <li class="header-bottom--link">Комоды</li>
            <li class="header-bottom--link">Распродажа</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
