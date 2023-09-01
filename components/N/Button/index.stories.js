import NButton from './index.vue';

export default {
  title: 'NaprocatUI/Button',
  component: NButton,
};

export const Default = {
  render: (args, { argTypes }) => ({
    components: { NButton },
    props: Object.keys(argTypes),
    template: '<n-button @click="onClick" v-bind="$props">{{buttonText || "Default text"}}</n-button>',
  }),
  args: {
    disabled: false,
    pending: false,
    prevent: false,
    block: false,
    variant: 'primary',
    type: 'button',
    textVariant: 'default',
    size: 'md',
    rounded: 'md',
    buttonText: 'Текст кнопки',
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    onClick: { action: 'click', table: { disable: true } },
    prevent: {
      control: 'boolean',
      description: 'Отменяет событие клик но не отключает кнопку',
    },
    buttonText: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'success', 'gray', 'dark', 'outline-primary', 'link', 'outline-link'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
    textVariant: {
      control: {
        type: 'inline-radio',
        options: ['blue', 'black', 'gray', 'white', 'red', 'default'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['lg', 'md', 'sm', 'xs'],
      },
    },
    rounded: {
      control: {
        type: 'inline-radio',
        options: ['xl', 'lg', 'md', 'sm', 'xs', '0'],
      },
    },
  },
};
