<template>
  <div v-if="items" class="tree">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="tree__title"
      :class="{'tree__down': item.children?.length, 'tree__down--active': openIn(item)}"
    >
      <label
        class="tree__label"
        :class="{'tree__title--active' : pick(item)}"
        @click="clickItem(item)"
      >
        {{ item.title }}
      </label>
      <UITrees
        v-if="openIn(item) && item.children?.length"
        v-model="selectedIn"
        class="tree__children"
        :items="item.children"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UITrees',
  props: {
    items: {
      type: [Object, Array],
      default: () => [
        // {
        //   title: String,
        //   link: String,
        //   disabled: Boolean, not realized
        //   value: Any,
        //   children: Array,
        // },
      ],
    },
    value: {
      type: Number,
      default: undefined,
    },
  },
  data() {
    return {
      selectedIn: null,
      open: [],
    };
  },
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  watch: {
    selectedIn(val) {
      this.$emit('input', val);
    },
  },
  methods: {
    pick(item) {
      return this.selected === item.value;
    },
    openIn(item) {
      return this.open.includes(item.value);
    },
    clickItem(item) {
      this.selected = item.value;
      const index = this.open.findIndex((e) => e === item.value);
      if (index !== -1) {
        this.open.splice(index, 1);
      } else {
        this.open.push(item.value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tree {
  &__title{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
    &:not(:last-child){
      margin-bottom: 18px;
    }
    &--active{
      color: var(--primary-color);
    }
  }
  &__label{
    cursor: pointer;
  }
  &__down {
    position: relative;
    padding-left: 16px;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      top: 5px;
      width: 7px;
      height: 7px;
      margin: 0 5px 0 0;
      box-sizing: border-box;
      border: 1px solid black;
      border-left-color: transparent;
      border-bottom-color: transparent;
      transform: rotate(45deg);
      transition: .3s;
    }
    &--active{
      &::before {
        transition: .3s;
        position: absolute;
        left: 3px;
        top: 3px;
        transform: rotate(135deg);
      }
    }
  }
  &__children{
    padding: 10px 0 0 16px;
  }
}
</style>
