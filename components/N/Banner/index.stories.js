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
    items: [
      {
        id: 1,
        name: 'Maecenas vestibulum mollis',
        description: 'Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        image_url: 'https://placehold.co/800',
        price: 186,
      },
      {
        id: 1,
        name: 'Curabitur nisi',
        description: 'Ut non enim eleifend felis pretium feugiat.',
        image_url: 'https://placehold.co/800',
        price: 1054,
      },
      {
        id: 1,
        name: 'Fusce',
        description: 'Vestibulum volutpat pretium libero.',
        image_url: 'https://placehold.co/800',
        price: 15896,
      },
      {
        id: 1,
        name: 'Phasellus accumsan cursus velit',
        description: 'Sed cursus vitae tortor.',
        image_url: 'https://placehold.co/800',
        price: 125893,
      },
    ],
  },
  argTypes: {},
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
      image_url: 'https://placekitten.com/800',
      price: 5000,
    },
  },
};
