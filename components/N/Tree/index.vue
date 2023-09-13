<template>
  <div v-if="items" class="tree">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="tree__title"
      :class="{'tree__down': item.children?.length, 'tree__down--active': open(item)}"
    >
      <input
        v-if="!item.children?.length && multiple"
        :id="`branch-${componentId}-${item.value}`"
        class="tree__checkbox"
        type="checkbox"
      />
      <label
        :for="`branch-${componentId}-${item.value}`"
        class="tree__label"
        :class="{'tree__title--active' : active(item)}"
        @click="clickItem(item)"
      >
        {{ item.title }}
      </label>
      <n-tree
        v-show="open(item) && item.children?.length"
        v-model="selected"
        class="tree__children"
        :items="item.children"
        :multiple="multiple"
        @openChange="openChanges(item.value, $event)"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'NTree',
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
      type: [Number, Array],
      default: () => [],
    },
    multiple: Boolean,
  },
  data() {
    return {
      opens: [],
    };
  },
  computed: {
    componentId() {
      // eslint-disable-next-line no-underscore-dangle
      return this._uid;
    },
    selected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  mounted() {
    const id = this.items.find((e) => this.active(e))?.value;
    if (id) {
      this.openChanges(id, this.opens);
    }
  },
  methods: {
    openChanges(id, opens) {
      this.opens = opens;
      this.opens.push(id);
      this.$emit('openChange', this.opens);
    },
    checking(item) {
      return this.multiple && this.selected.includes(item.value);
    },
    active(item) {
      return this.selected === item.value || this.checking(item);
    },
    open(item) {
      // this.check = this.checking(item);
      return this.opens.includes(item.value);
    },
    clickItem(item) {
      this.addIds(this.opens, item.value);
      if (this.multiple) {
        this.addIds(this.selected, item.value);
      } else {
        this.selected = item.value;
      }
    },
    addIds(arr, id) {
      const ids = arr.findIndex((e) => e === id);
      if (ids !== -1) {
        arr.splice(ids, 1);
      } else {
        arr.push(id);
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
    position: relative;
    &:not(:last-child){
      margin-bottom: 18px;
    }
    &--active{
      color: var(--primary-color, red);
    }
  }
  &__checkbox{
    position: absolute;
    top: 2px;
  }
  &__label{
    padding-left: 16px;
    cursor: pointer;
  }
  &__down {
    position: relative;
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
      z-index: -1;
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
