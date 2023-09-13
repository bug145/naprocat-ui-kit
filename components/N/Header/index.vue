<template>
  <div
    class="header"
    :class="{'header--border' : showBorder, 'header--only-search': showOnlySearch}"
  >
    <div class="header__block">
      <!--      <div-->
      <!--        v-if="!showOnlySearch"-->
      <!--        class="flex-align"-->
      <!--      >-->
      <!--        <lazy-hydrate never>-->
      <n-header-logo />
      <!--        </lazy-hydrate>-->
      <n-header-city />
      <!--      </div>-->
      <!--      <lazy-hydrate when-idle>-->
      <input type="text" class="header__center pr" />
      <!--      </lazy-hydrate>-->
      <!--      <div-->
      <!--        v-if="!showOnlySearch"-->
      <!--        class="header__right flex-between"-->
      <!--      >-->
      <!--        <lazy-hydrate on-interaction>-->
      <!--<NavHeaderLanguage v-if="!showOnlySearch && $isMobile && $config.enableLocales" />-->
      <!--        </lazy-hydrate>-->
      <!--        <client-only>-->
      <!--          <template #placeholder>-->
      <!--            <load-skaletion-->
      <!--              v-if="!$isMobile"-->
      <!--              :style="{-->
      <!--                borderRadius: '8px',-->
      <!--                display: 'block',-->
      <!--                width: '170px',-->
      <!--                height: '46px'-->
      <!--              }"-->
      <!--            />-->
      <!--          </template>-->
      <!--          <NavHeaderCreateProductBtn />-->
      <!--        </client-only>-->
      <!--        <lazy-hydrate when-idle>-->
      <n-header-links />
      <!--        </lazy-hydrate>-->
      <!--        <client-only>-->
      <!--          <template #placeholder>-->
      <!--            <load-skaletion-->
      <!--              :style="{-->
      <!--                borderRadius: '25px',-->
      <!--                display: 'block',-->
      <!--                width: '46px',-->
      <!--                height: '46px'-->
      <!--              }"-->
      <!--            />-->
      <!--          </template>-->
      <n-header-avatar />
    <!--        </client-only>-->
    <!--      </div>-->
    </div>
    <!--    <NavHeaderOfflineError />-->
    <!--    <client-only>-->
    <!--      <loader @show="percentShow=$event" />-->
    <!--    </client-only>-->
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
// import LazyHydrate from 'vue-lazy-hydration';
// import { routeTrim } from '~/utils/routeSnip';
// import Loader from '~/components/Loader.vue';

import NHeaderLogo from '~/components/N/Header/logo.vue';
import NHeaderCity from '~/components/N/Header/city.vue';
import NHeaderLinks from '~/components/N/Header/links.vue';
import NHeaderAvatar from '~/components/N/Header/avatar.vue';

export default {
  name: 'NHeader',
  components: {
    NHeaderAvatar, NHeaderLinks, NHeaderCity, NHeaderLogo,
  },
  // components: {
  //   LazyHydrate,
  //   Loader,
  // },
  data() {
    return {
      percentShow: false,
    };
  },
  computed: {
    showOnlySearch() {
      // return ['searchPage', 'catalogPage'].includes(routeTrim(this.$route.name)) && this.$isMobile;
      return true;
    },
    showBorder() {
      // return routeTrim(this.$route.name) !== 'index'
      //   && !this.showOnlySearch
      //   && !this.percentShow;
      return true;
    },
  },
  async mounted() {
    // if (this.$auth.loggedIn) {
    //   await this.notificationUnread();
    // }
  },
  methods: {
    // routeTrim,
    // ...mapActions({
    //   notificationUnread: 'notification/notificationUnread',
    // }),
  },
};
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 0.03);
  max-width: 100vw;
  position: fixed;
  z-index: 4;
  //border: 1px solid red;
  @include breakpoint.down(md) {
    position: inherit;
    z-index: 5;
  }
  &__block{
    width: 100%;
    max-width: 1024px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 27px 0 23px 0;
    @include breakpoint.down(md) {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      width: 100%;
      padding: 18px 22px 20px;
    }
  }
  &--border{
    border-bottom: 4px solid var(--primary-color);
  }
  &__bottom-load{
    height: 4px;
    //width: 100%;
    background-color: var(--danger-color);
  }
  &--only-search[class] {
    .header {
      &__block {
        display: flex;
      }
    }
    :deep(.search__filter) {
      display: none;
    }
    :deep(.nav-search__back) {
      display: block;
    }
  }
  &__center{
    width: 100%;
    margin: 0 20px;
    @include breakpoint.down(md) {
      margin: 0;
      grid-area: 2 / 1 / 3 / 3;
      display: flex;
      grid-gap: 8px;
      & > div {
        width: 100%;
      }
    }
  }
  &__right{
    @include breakpoint.down(md) {
      width: unset;
      justify-content: flex-end;
      grid-gap: 22px;
    }
  }
}

</style>
