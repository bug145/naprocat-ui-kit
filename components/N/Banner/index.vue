<template>
  <div>
    <ssr-carousel
      v-if="carousel"
      :slides-per-page="1"
      :gutter="10"
      :peek-right="40"
      class="carousel"
    >
      <n-banner-item
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="carousel__item"
      />
    </ssr-carousel>
    <div v-else class="banner">
      <n-banner-item
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="banner__item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NBannerIndex',
  props: {
    carousel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      item: [
        {
          "title": "Транспорт",
          "value": 298,
          "link": "/catalog/transport-298/",
          "children": [
            {
              "title": "Мопед",
              "value": 184,
              "link": "/catalog/moped-184/",
              "children": []
            }
          ]
        },
        {
          "title": "Медицинские товары",
          "value": 34,
          "link": "/catalog/medicinskie-tovary-34/",
          "children": [
          {
            "title": "Фотолампа от желтухи",
            "value": 122,
            "link": "/catalog/fotolampa-ot-jeltuhi/",
            "children": []
          },
          {
            "title": "Концентраторы кислорода",
            "value": 229,
            "link": "/catalog/koncentratory-kisloroda-229/",
            "children": []
          },
          {
            "title": "Кварцевые лампы",
            "value": 232,
            "link": "/catalog/kvarcevye-lampy-232/",
            "children": []
          },
          {
            "title": "Инвалидные коляски",
            "value": 36,
            "link": "/catalog/invalidnye-kolyaski/",
            "children": []
          },
          {
            "title": "Костыли",
            "value": 39,
            "link": "/catalog/kostyli-39/",
            "children": []
          }
        ]
        },
        {
          "title": "Спорт и туризм",
          "value": 1,
          "link": "/catalog/sport-i-turizm/",
          "children": [
          {
            "title": "Ролики",
            "value": 185,
            "link": "/catalog/roliki-185/",
            "children": []
          },
          {
            "title": "Зимний спорт",
            "value": 197,
            "link": "/catalog/zimniy-sport/",
            "children": [
              {
                "title": "Сноуборды",
                "value": 92,
                "link": "/catalog/snoubordy-92/",
                "children": []
              },
              {
                "title": "Спортивный костюм",
                "value": 93,
                "link": "/catalog/sportivnyy-kostyum/",
                "children": []
              },
              {
                "title": "Лыжи",
                "value": 103,
                "link": "/catalog/lyji/",
                "children": []
              },
              {
                "title": "Прочие товары для лыж и сноуборда",
                "value": 198,
                "link": "/catalog/prochie-tovary-dlya-lyj-i-snouborda/",
                "children": []
              },
              {
                "title": "Защита сноуборда и лыж",
                "value": 199,
                "link": "/catalog/zashchita-snouborda-i-lyj/",
                "children": []
              },
              {
                "title": "Ботинки для сноуборда",
                "value": 200,
                "link": "/catalog/botinki-dlya-snouborda/",
                "children": []
              },
              {
                "title": "Коньки",
                "value": 7,
                "link": "/catalog/konki-7/",
                "children": []
              }
            ]
          },
          {
            "title": "Спортивное оборудование",
            "value": 201,
            "link": "/catalog/sportivnoe-oborudovanie-201/",
            "children": []
          },
          {
            "title": "Туризм и отдых на природе",
            "value": 213,
            "link": "/catalog/turizm-i-otdyh-na-prirode/",
            "children": [
              {
                "title": "Шатры",
                "value": 207,
                "link": "/catalog/shatry/",
                "children": []
              },
              {
                "title": "Спальные мешки и оболочки",
                "value": 208,
                "link": "/catalog/spalnye-meshki-i-obolochki-208/",
                "children": []
              },
              {
                "title": "Туристическое оборудование",
                "value": 209,
                "link": "/catalog/turisticheskoe-oborudovanie/",
                "children": []
              },
              {
                "title": "Туристические рюкзаки",
                "value": 210,
                "link": "/catalog/turisticheskie-ryukzaki/",
                "children": []
              },
              {
                "title": "Прочие товары для туризма",
                "value": 211,
                "link": "/catalog/prochie-tovary-dlya-turizma/",
                "children": []
              },
              {
                "title": "Ледоступы",
                "value": 212,
                "link": "/catalog/ledostupy-212/",
                "children": []
              }
            ]
          },
          {
            "title": "Велоспорт ",
            "value": 6,
            "link": "/catalog/velosport-6/",
            "children": [
              {
                "title": "Городской",
                "value": 181,
                "link": "/catalog/gorodskoy/",
                "children": []
              },
              {
                "title": "Шоссейный ",
                "value": 182,
                "link": "/catalog/shosseynyy/",
                "children": []
              },
              {
                "title": "Детский",
                "value": 183,
                "link": "/catalog/detskiy/",
                "children": []
              },
              {
                "title": "Шлем и защита",
                "value": 215,
                "link": "/catalog/shlem-i-zashchita/",
                "children": []
              }
            ]
          }
        ]
        },
        {
          "title": "Одежда и Стиль",
          "value": 3,
          "link": "/catalog/odejda-i-stil/",
          "children": [
          {
            "title": "Мантия ",
            "value": 169,
            "link": "/catalog/mantiya/",
            "children": []
          },
          {
            "title": "Платья",
            "value": 236,
            "link": "/catalog/platya/",
            "children": [
              {
                "title": "Платья для беременных",
                "value": 88,
                "link": "/catalog/platya-dlya-beremennyh/",
                "children": []
              },
              {
                "title": "Национальные платья",
                "value": 141,
                "link": "/catalog/nacionalnye-platya/",
                "children": []
              },
              {
                "title": "Вечерние платья",
                "value": 29,
                "link": "/catalog/vechernie-platya/",
                "children": []
              }
            ]
          },
          {
            "title": "Мужские костюмы",
            "value": 237,
            "link": "/catalog/mujskie-kostyumy/",
            "children": [
              {
                "title": "Классические костюмы",
                "value": 239,
                "link": "/catalog/klassicheskie-kostyumy/",
                "children": []
              },
              {
                "title": "Смокинги",
                "value": 286,
                "link": "/catalog/smokingi-286/",
                "children": []
              }
            ]
          },
          {
            "title": "Одежда для выступлений",
            "value": 241,
            "link": "/catalog/odejda-dlya-vystupleniy/",
            "children": [
              {
                "title": "Карнавальные костюмы",
                "value": 80,
                "link": "/catalog/karnavalnye-kostyumy/",
                "children": []
              },
              {
                "title": "Народные костюмы",
                "value": 242,
                "link": "/catalog/narodnye-kostyumy/",
                "children": []
              },
              {
                "title": "Восточные костюмы",
                "value": 243,
                "link": "/catalog/vostochnye-kostyumy/",
                "children": []
              }
            ]
          }
        ]
        },
      ],
      items: [
        {
          id: 1,
          name: 'Покатаемся?',
          description: 'Аренда велосипедов ?',
          image_url: 'https://img.naprocat.kz/sig/aHR0cHM6Ly9taW5pby5uYXByb2NhdC5rei9uYXByb2NhdC1kZ'
            + 'XYvYmFubmVycy9mczhIaGxmZmp3YWhQTzE1SUR5ckl1UXkyUEswZWQtbWV0YVltRnVibVZ5WDJKcGEyVXVjRzVuLS5wbmc=',
          price: 5000,
        },
        {
          id: 2,
          name: 'Вечерние платья',
          description: 'для мероприятий',
          image_url: 'https://img.naprocat.kz/sig/aHR0cHM6Ly9taW5pby5uYXByb2NhdC5rei9uYXByb2NhdC1kZXYvYmFubmVycy'
            + '9wcmR2d3NvYVVPUW5lSFhSMXd5bmVMblFFOWpSZzgtbWV0YVJuSmhiV1VnTmprNU9Ua2dLRE1wTG5CdVp3PT0tLnBuZw==',
          price: 2000,
        },
        {
          id: 3,
          name: 'Настольные игры',
          description: 'в кругу друзей',
          image_url: 'https://img.naprocat.kz/sig/aHR0cHM6Ly9taW5pby5uYXByb2NhdC5rei9uYXByb2NhdC1kZXYvYmFubmVy'
            + 'cy9qb2RFZjRmZEI1a3NwVXB2UWY3bFJhYmthaElETFgtbWV0YVJuSmhiV1VnTnpBdWNHNW4tLnBuZw==',
          price: 3500,
        },
        {
          id: 4,
          name: 'Аренда инструментов',
          description: 'для ремонтных работ',
          image_url: 'https://img.naprocat.kz/sig/aHR0cHM6Ly9taW5pby5uYXByb2NhdC5rei9uYXByb2NhdC1kZXYvYmFubmVycy'
            + '9ZSlRPN2ZURm1HRFVwVHRUd29ZTEpYbnZNYnpUMXAtbWV0YVltRnVibVZ5WDNSdmIyeHpMbkJ1Wnc9PS0ucG5n',
          price: 12000,
        },
      ],
    };
  },
  computed: {
    $isMobile() {
      return window.innerWidth <= 756;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner{
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  &__item{
    height: 250px;
  }
}
.carousel{
  &__item{
    height: 520px;
    @include breakpoint.down(md) {
      height: 180px;
    }
  }
}
</style>
