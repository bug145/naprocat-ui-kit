<template>
  <div
    class="avatar__block flex-column pr"
    @click="$router.push('#')"
  >
    <div v-if="false">
      <nuxt-img
        v-if="false"
        class="avatar"
        quality="80"
        sizes="sm:100px md:50px lg:50px"
        :src="avatar"
        alt=""
      />
      <div
        v-else
        class="avatar__none pointer flex-column"
        :style="avatarBg"
      >
        {{ avatarName }}
      </div>
    </div>
    <img
      v-else
      class="avatar"
      :src="avatar"
      alt=""
    />
    <span class="avatar__text center"> Вход </span>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import avatartIcon from '@/assets/icons/icon_avatar.svg?data';

export default {
  name: 'NHeaderAvatar',
  data() {
    return {
      colors: [
        ['A5D4FF', '49A1F1'],
        ['FFDC97', 'F1B849'],
        ['AE92FF', '7F49F1'],
        ['FF81BE', 'F1499A'],
        ['656565', '070707'],
        ['FFA48F', 'F16849'],
        ['7BFF90', '00AE1C'],
        ['A2E8FF', '3BB9E0'],
      ],
    };
  },
  computed: {
    avatar() {
      return avatartIcon;
    },
    avatarBg() {
      return 'background: linear-gradient(180deg, #A5D4FF 0%, #49A1F1 100%)';
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar{
  width: 40px;
  height: 40px;
  border: 3px solid var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  @include breakpoint.down(md) {
    width: 56px;
    height: 56px;
  }
  &__moderation{
    width: 20px;
    position: absolute;
    top: -4px;
    right: -4px;
  }
  &__none{
    width: 46px;
    height: 46px;
    border-radius: 50%;
    font-family: var(--font-rubik);
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
  }
  &__block{
    position: relative;
    &:hover{
      .avatar__text{
        color: var(--primary-color);
      }
      .avatar{
        opacity: .9;
      }
    }
  }
  &__text{
    max-width: 200px;
    white-space: nowrap;
    padding-top: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #333333;
    transition: .2s;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);

    overflow: hidden;
    @include breakpoint.down(md) {
      display: none;
    }
  }
  &__load{
    width: 46px;
    height: 46px;
  }
}
</style>
