/* eslint-disable no-shadow */
import Modal from './index.vue';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const parameters = {
  layout: 'centered',
  docs: {
    transformSource: (code, ctx) => {
      const codeNode = document.createElement('div');
      codeNode.innerHTML = code;
      console.log({ code: codeNode, ctx });
      return code;
    },
    source: {},
  },
};

const argTypes = {
  onChange: { action: 'input', table: { disable: true } },
  onSubmit: { action: 'submit', table: { disable: true } },
  submitText: {
    control: {
      type: 'text',
    },
  },
  fluidBody: {
    control: 'boolean',
    description: 'Растягивает content модалки на всю ширину',
  },
  size: {
    control: {
      type: 'inline-radio',
      options: ['lg', 'md', 'sm'],
    },
  },
};

export const Default = {
  render: (args, { argTypes }) => ({
    components: { Modal },
    props: Object.keys(argTypes),
    template: `
    <div>
      <n-button @click="$props.value = true">Show modal</n-button>
      <n-modal @input="onChange" @submit="onSubmit" v-bind="$props" v-model="value">
        Curabitur blandit mollis lacus. Vivamus aliquet elit ac nisl.
      </n-modal>
    </div>
    `,
  }),
  args: {
    value: false,
    title: 'Donec sodales',
    subtitle: 'In consectetuer turpis ut velit',
    inline: false,
    size: 'md',
    submitText: 'Submit',
    disableSubmit: false,
    fluidBody: false,
  },
  argTypes,
  parameters,
};

export const Dropdown = {
  render: (args, { argTypes }) => ({
    components: { Modal },
    props: Object.keys(argTypes),
    template: `
    <div>
      <n-button @click="$props.value = true" v-if="$device.isMobile">Show as modal</n-button>
      <n-modal @input="onChange" @submit="onSubmit" v-bind="$props" v-model="value">
        <div><img src="https://placekitten.com/200/200"/></div>
        <div><img src="https://placekitten.com/200/300"/></div>
        <div><img src="https://placekitten.com/300/200"/></div>
        <template v-slot:trigger>
          <n-button @click="$props.value = true">Show as dropdown</n-button>
        </template>
      </n-modal>
    </div>
    `,
  }),
  args: {
    value: false,
    title: 'Donec sodales',
    subtitle: 'In consectetuer turpis ut velit',
    inline: true,
    size: 'md',
    submitText: '',
    disableSubmit: false,
    fluidBody: false,
  },
  argTypes,
  parameters,
};
