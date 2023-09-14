import NTree from './index.vue';

export default {
  title: 'Components/Tree',
  component: NTree,
};

export const Default = {
  render: (args, { argTypes }) => ({
    components: { NTree },
    props: Object.keys(argTypes),
    template: '<n-tree v-model="$props.value" v-bind="$props"></n-tree>',
  }),
  args: {
    items: [
      {
        title: 'Спорт и туризм',
        value: 1,
        link: '/catalog/sport-i-turizm/',
        children: [
          {
            title: 'Ролики',
            value: 185,
            link: '/catalog/roliki-185/',
            children: [],
          },
          {
            title: 'Зимний спорт',
            value: 197,
            link: '/catalog/zimniy-sport/',
            children: [
              {
                title: 'Сноуборды',
                value: 92,
                link: '/catalog/snoubordy-92/',
                children: [],
              },
              {
                title: 'Спортивный костюм',
                value: 93,
                link: '/catalog/sportivnyy-kostyum/',
                children: [],
              },
              {
                title: 'Лыжи',
                value: 103,
                link: '/catalog/lyji/',
                children: [],
              },
              {
                title: 'Прочие товары для лыж и сноуборда',
                value: 198,
                link: '/catalog/prochie-tovary-dlya-lyj-i-snouborda/',
                children: [],
              },
              {
                title: 'Защита сноуборда и лыж',
                value: 199,
                link: '/catalog/zashchita-snouborda-i-lyj/',
                children: [],
              },
              {
                title: 'Ботинки для сноуборда',
                value: 200,
                link: '/catalog/botinki-dlya-snouborda/',
                children: [],
              },
              {
                title: 'Коньки',
                value: 7,
                link: '/catalog/konki-7/',
                children: [],
              },
            ],
          },
          {
            title: 'Спортивное оборудование',
            value: 201,
            link: '/catalog/sportivnoe-oborudovanie-201/',
            children: [],
          },
          {
            title: 'Туризм и отдых на природе',
            value: 213,
            link: '/catalog/turizm-i-otdyh-na-prirode/',
            children: [
              {
                title: 'Шатры',
                value: 207,
                link: '/catalog/shatry/',
                children: [],
              },
              {
                title: 'Спальные мешки и оболочки',
                value: 208,
                link: '/catalog/spalnye-meshki-i-obolochki-208/',
                children: [],
              },
              {
                title: 'Туристическое оборудование',
                value: 209,
                link: '/catalog/turisticheskoe-oborudovanie/',
                children: [],
              },
              {
                title: 'Туристические рюкзаки',
                value: 210,
                link: '/catalog/turisticheskie-ryukzaki/',
                children: [],
              },
              {
                title: 'Прочие товары для туризма',
                value: 211,
                link: '/catalog/prochie-tovary-dlya-turizma/',
                children: [],
              },
              {
                title: 'Ледоступы',
                value: 212,
                link: '/catalog/ledostupy-212/',
                children: [],
              },
            ],
          },
          {
            title: 'Велоспорт ',
            value: 6,
            link: '/catalog/velosport-6/',
            children: [
              {
                title: 'Городской',
                value: 181,
                link: '/catalog/gorodskoy/',
                children: [],
              },
              {
                title: 'Шоссейный ',
                value: 182,
                link: '/catalog/shosseynyy/',
                children: [],
              },
              {
                title: 'Детский',
                value: 183,
                link: '/catalog/detskiy/',
                children: [],
              },
              {
                title: 'Шлем и защита',
                value: 215,
                link: '/catalog/shlem-i-zashchita/',
                children: [],
              },
            ],
          },
        ],
      },
      {
        title: 'Одежда и Стиль',
        value: 3,
        link: '/catalog/odejda-i-stil/',
        children: [
          {
            title: 'Мантия ',
            value: 169,
            link: '/catalog/mantiya/',
            children: [],
          },
          {
            title: 'Платья',
            value: 236,
            link: '/catalog/platya/',
            children: [
              {
                title: 'Платья для беременных',
                value: 88,
                link: '/catalog/platya-dlya-beremennyh/',
                children: [],
              },
              {
                title: 'Национальные платья',
                value: 141,
                link: '/catalog/nacionalnye-platya/',
                children: [],
              },
              {
                title: 'Вечерние платья',
                value: 29,
                link: '/catalog/vechernie-platya/',
                children: [],
              },
            ],
          },
          {
            title: 'Мужские костюмы',
            value: 237,
            link: '/catalog/mujskie-kostyumy/',
            children: [
              {
                title: 'Классические костюмы',
                value: 239,
                link: '/catalog/klassicheskie-kostyumy/',
                children: [],
              },
              {
                title: 'Смокинги',
                value: 286,
                link: '/catalog/smokingi-286/',
                children: [],
              },
            ],
          },
          {
            title: 'Одежда для выступлений',
            value: 241,
            link: '/catalog/odejda-dlya-vystupleniy/',
            children: [
              {
                title: 'Карнавальные костюмы',
                value: 80,
                link: '/catalog/karnavalnye-kostyumy/',
                children: [],
              },
              {
                title: 'Народные костюмы',
                value: 242,
                link: '/catalog/narodnye-kostyumy/',
                children: [],
              },
              {
                title: 'Восточные костюмы',
                value: 243,
                link: '/catalog/vostochnye-kostyumy/',
                children: [],
              },
            ],
          },
        ],
      },
    ],
    value: 201,
    multiple: false,
    opens: [],
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};
