<template>
  <div
    class="checkbox-wrap flex-align"
    :class="iClass"
  >
    <div class="checkbox">
      <input
        :id="id"
        v-model="modelValue"
        class="checkbox-input"
        type="checkbox"
        :disabled="disabled"
      />
      <label
        class="checkbox-label"
        :for="id"
      ></label>
    </div>
    <label
      v-if="label"
      class="checkbox-text"
      :class="{'checkbox-text-active' : modelValue, 'disabled':disabled}"
      :for="id"
    >{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'UiCheckbox',
  props: {
    value: [Boolean],
    id: {
      type: [String, Number],
      default: 'checkbox',
    },
    valueText: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    iClass: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('change', val);
      },
    },
  },
  modal: {
    props: 'value',
    event: 'input',
  },
};
</script>

<style lang="scss" scoped>
.checkbox{
  &-wrap{
    width: 100%;
    //padding: 8px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    transition: .3s;
    &:hover{
      background-color: rgb(21, 128, 179, 0.2);
    }
  }
  &-input{
    display: none;
    &:checked + .checkbox-label{
      background: var(--primary-color);
    }
    &:checked + .checkbox-label::before{
      opacity: 1;
    }
  }
  &-label{
    width: 14px;
    height: 14px;
    margin: 0 8px;
    border-radius: 3px;
    display: block;
    background: rgba(40, 48, 57, 0.15);
    position: relative;
    cursor: pointer;
    &::before{
      content: "";
      position: absolute;
      top: 2px;
      left: 5px;
      display: block;
      width: 2px;
      height: 5px;
      transform: rotate(45deg);
      border: 1.5px solid white;
      border-top: none;
      border-left: none;
      opacity: 0;
    }
  }
  &-text{
    width: 100%;
    padding: 8px 0;
    display: block;
    //margin:  2px 0 0 0;
    font-weight: 400;
    //font-family: var(--font-rubik);
    font-size: 14px;
    line-height: 15px;
    color: #828282;
    cursor: pointer;
    &-active{
      color: #333333;
    }
  }
}
.disabled{
  opacity: .3;
}
.mb{
  margin-bottom: 16px;
}
</style>
