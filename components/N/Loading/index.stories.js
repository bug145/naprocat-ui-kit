import NLoading from './index.vue';

export default {
  title: 'Components/Loading',
  component: NLoading,
};

export const Default = {
  render: (args, { argTypes }) => ({
    components: { NLoading },
    props: Object.keys(argTypes),
    template: '<n-loading v-bind="$props"></n-loading>',
  }),
  args: {
    state: 'pending',
    variant: 'primary',
    size: 'lg',
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
    variant: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary'],
      },
    },
    state: {
      control: {
        type: 'inline-radio',
        options: ['pending', 'success', 'failed'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['lg', 'md', 'sm', 'xs'],
      },
    },
  },
};
