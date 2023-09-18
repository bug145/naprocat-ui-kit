<template>
  <div>
    <div class="city" @click="cityModal = true">
      <img
        class="city-icon"
        src="../../../assets/icons/map.svg?data"
        alt=""
      />
      <div class="city-info">
        <p class="city-text">
          Местоположение
        </p>
        <p class="city-name">
          <label> Алматы </label>
        </p>
      </div>
    </div>
    <transition :name="cityTransition">
      <!--      <ModalCity-->
      <!--        v-if="cityModal"-->
      <!--        @close="cityModal = false"-->
      <!--      />-->
    </transition>
  </div>
</template>

<script>

export default {
  name: 'NHeaderCity',
  data() {
    return {
      cityModal: false,
    };
  },
  computed: {
    cityTransition() {
      return this.$isMobile ? 'fadeInUp' : 'fadeIn';
    },
  },
};
</script>

<style lang="scss" scoped>
.city {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  min-width: 129.39px;
  margin-left: 24px;
  cursor: pointer;

  @include breakpoint.down(md) {
    margin: 0;
  }

  &:hover {
    .city-name {
      color: red;
    }
  }

  img {
    min-width: 18px;

    @include breakpoint.down(md) {
      display: none;
    }
  }

  &-info {
    margin-left: 10px;

    @include breakpoint.down(md) {
      margin: 0;
    }
  }

  &-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #828282;
  }

  &-name {
    min-height: 19px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    transition: .2s;
    white-space: nowrap;

    label {
      cursor: pointer;
    }

    @include breakpoint.down(md) {
      font-size: 18px;
      line-height: 21px;
    }
  }
}
</style>
