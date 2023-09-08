import NBannerItem from './index.vue';

export default {
  title: 'Template/Banner Item',
  component: NBannerItem,
};

export const Default = {
  render: (args, { argTypes }) => ({
    components: { NBannerItem },
    props: Object.keys(argTypes),
    template: '<n-banner-item v-bind="$props"></n-banner-item>',
  }),
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  args: {
    item: {
      id: 1,
      name: 'Curabitur nisi',
      description: 'Ut non enim eleifend felis pretium feugiat.',
      image_url: 'https://placehold.co/800',
      price: 1054,
    },
  },
};
