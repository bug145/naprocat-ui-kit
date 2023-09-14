import NHeader from './index.vue';

export default {
  title: 'Components/Header',
  component: NHeader,
};

export const Default = {
  render: (args, { argTypes }) => ({
    components: { NHeader },
    props: Object.keys(argTypes),
    template: '<n-header v-bind="$props"></n-header>',
  }),
  args: {
    city: true,
    avatar: true,
    mobile: false,
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};
