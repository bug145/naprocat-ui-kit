import NBanner from './index.vue';
import NBannerItem from './item/index.vue';

export default {
  title: 'Template/Banner',
  component: NBanner,
};

export const Default = {
  render: (args, { argTypes }) => ({
    components: { NBanner },
    props: Object.keys(argTypes),
    template: '<n-banner v-bind="$props"></n-banner>',
  }),
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  args: {
    carousel: false,
  },
};

export const Item = {
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
      name: 'Покатаемся?',
      description: 'Аренда велосипедов ?',
      image_url: 'https://img.naprocat.kz/sig/aHR0cHM6Ly9taW5pby5uYXByb2NhdC5rei9uYXByb2NhdC1kZ'
        + 'XYvYmFubmVycy9mczhIaGxmZmp3YWhQTzE1SUR5ckl1UXkyUEswZWQtbWV0YVltRnVibVZ5WDJKcGEyVXVjRzVuLS5wbmc=',
      price: 5000,
    },
  },
};
