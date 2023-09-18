<template>
  <div class="footer">
    <div class="footer__block">
      <div class="footer__left">
        <img
          class="footer__logo"
          src="../../../assets/icons/logo/logo-white.svg?data"
          alt=""
        />
        <p class="footer__left-text pointer">
          © {{ year.slice(0,4) }} «Naprocat». <br /> Все права защищены. <br />
          <a
            class="footer__left-text underline pointer"
            href="https://blog.naprocat.kz/privacy"
          >
            Политика конфиденциальности
          </a>
        </p>
        <div class="footer__right-social flex-between">
          <div class="footer__right-acquiring-item">
            <img
              class="all"
              src="@/assets/icons/footer/epay-logo.svg?data"
              alt=""
            />
          </div>
          <div class="footer__right-acquiring-item">
            <img
              class="all"
              src="@/assets/icons/footer/mastercard-logo.svg?data"
              alt=""
            />
          </div>
          <div class="footer__right-acquiring-item">
            <img
              class="all"
              src="@/assets/icons/footer/visa-logo.svg?data"
              alt=""
            />
          </div>
        </div>
      </div>
      <div v-for="(item, index) in items" :key="index" class="footer__right-FAQ">
        <p class="footer__right-title">
          {{ item.title }}
        </p>
        <div class="footer__right-list">
          <nuxt-link
            v-for="(pos, i) in item.list"
            :key="i"
            class="footer__right-text"
            :to="pos.url"
            external
          >
            {{ pos.name }}
          </nuxt-link>
        </div>
        <div v-if="item.social" class="footer__right-social flex-between">
          <a
            class="footer__right-social-item"
            target="_blank"
            href="https://www.instagram.com/naprocat.kz/"
          ><img
            class="all"
            src="../../../assets/icons/footer/icon_instagram.svg?data"
            alt=""
          /></a>
          <a
            class="footer__right-social-item"
            target="_blank"
            href="https://web.telegram.org/a/#5819133625"
          >
            <img
              class="all"
              src="../../../assets/icons/footer/icon_telegram.svg?data"
              alt=""
            />
          </a>
          <a
            class="footer__right-social-item"
            target="_blank"
            href="https://www.youtube.com/@naprocat"
          >
            <img
              class="all"
              src="../../../assets/icons/footer/icon_youtube.svg?data"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NFooter',
  data() {
    return {
      items: [
        {
          title: 'АРЕНДАТОРАМ',
          list: [
            {
              name: 'Как взять в аренду',
              url: '#',
            },
            {
              name: 'Аренда без залога',
              url: '#',
            },
          ],
        },
        {
          title: 'АРЕНДОДАТЕЛЯМ',
          list: [
            {
              name: 'Как сдать в аренду',
              url: '#',
            },
            {
              name: 'Правила публикации',
              url: '#',
            },
          ],
        },
        {
          title: 'О КОМПАНИИ',
          list: [
            {
              name: 'О сервисе',
              url: '#',
            },
            {
              name: 'Брендбук',
              url: '#',
            },
            {
              name: 'Безопасность',
              url: '#',
            },
            {
              name: 'Контакты',
              url: '#',
            },
          ],
        },
        {
          title: 'НАШИ КОНТАКТЫ',
          list: [
            {
              name: '+7 700 919 90 19',
              url: '#',
            },
            {
              name: 'ТОО "NaProcat"',
              url: '#',
            },
            {
              name: 'БИН: 221140045368',
              url: '#',
            },
            {
              name: 'Адрес: г. Алматы, ул. Аль-Фараби 77/8',
              url: '#',
            },
          ],
          social: true,
        },
      ],
    };
  },
  computed: {
    year() {
      let year = '2023';
      year = new Date();
      return year.toISOString();
    },
  },
};
</script>

<style lang="scss" scoped>
  .footer{
    background: #333333;
    padding: 40px 0 30px 0;
    @include breakpoint.down(md) {
      display: none;
    }
    &__block {
      max-width: 1024px;
      margin: auto;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    &__logo {
      width: 200px;
      height: 29.96px;
      margin-bottom: 30px;
    }
    &__left-text {
      font-size: 14px;
      line-height: 17px;
      color: #828282;
      margin-bottom: 14px;
    }
    &__right-social {
      max-width: 140px;
      display: flex;
      grid-gap: 10px;
    }
    &__right-acquiring-item {
      width: 50px;
      height: 36px;
      background: transparent;
    }
    &__right-FAQ{
      max-width: 145px;
    }
    &__right-contact{
      max-width: 260px;
    }
    &__right-title {
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #F5F5F5;
      font-weight: 500;
      white-space: nowrap;
      margin-bottom: 30px;
    }
    &__right-list {
      display: flex;
      flex-direction: column;
      grid-gap: 14px;
      margin-bottom: 14px;
    }
    &__right-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #828282;
      text-decoration: none;
    }
    &__right-social-item{
      width: 32px;
      height: 32px;
      background: transparent;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
      display: flex;
      grid-gap: 12px;
    }
  }
</style>
