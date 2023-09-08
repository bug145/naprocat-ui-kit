import NBanner from './index.vue';

export default {
  title: 'Modules/Banner/Wrapper',
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
    connect: false,
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
  argTypes: {
    connect: {
      control: false,
      description: 'Boolean | Связывает с API (по умолчанию включен)',
    },
  },
};
