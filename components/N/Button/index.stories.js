import NButton from './index.vue';

export default {
  title: 'Components/Button',
  component: NButton,
};

export const Default = {
  render: (args, { argTypes }) => ({
    components: { NButton },
    props: Object.keys(argTypes),
    template: '<n-button @click="onClick" v-bind="$props">{{buttonText}}{{$device}}</n-button>',
  }),
  args: {
    disabled: false,
    pending: false,
    prevent: false,
    link: false,
    block: false,
    variant: 'primary',
    type: 'button',
    size: 'md',
    buttonText: 'Текст кнопки',
    fallback: 'fallback text',
    align: 'center',
    pill: false,
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    onClick: { action: 'click', table: { disable: true } },
    prevent: {
      control: 'boolean',
      description: 'Отменяет событие клик но не отключает кнопку',
    },
    link: {
      control: 'boolean',
      description: 'Стилизует кнопку под ссылку',
    },
    buttonText: {
      control: {
        type: 'text',
      },
    },
    fallback: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: [
          'primary',
          'primary-outlined',
          'secondary',
          'secondary-outlined',
          'success',
          'warning',
          'danger',
          'danger-outlined',
        ],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['lg', 'md', 'sm', 'xs'],
      },
    },
    align: {
      control: {
        type: 'inline-radio',
        options: ['start', 'center', 'end'],
      },
    },
    pill: {
      control: 'boolean',
    },
  },
};
