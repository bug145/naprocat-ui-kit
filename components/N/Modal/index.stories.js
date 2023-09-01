/* eslint-disable no-shadow */
import Modal from './index.vue';

export default {
  title: 'NaprocatUI/Modal',
  component: Modal,
};

const parameters = {
  layout: 'centered',
  docs: {
    source: {
      type: 'dynamic',
    },
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
      <button @click="$props.value = true">modal</button>
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
  },
  argTypes,
  parameters,
};

export const Inline = {
  render: (args, { argTypes }) => ({
    components: { Modal },
    props: Object.keys(argTypes),
    template: `
    <n-modal @input="onChange" @submit="onSubmit" v-bind="$props" v-model="value">
      <div><img src="https://placekitten.com/200/200"/></div>
      <div><img src="https://placekitten.com/200/300"/></div>
      <div><img src="https://placekitten.com/300/200"/></div>
      <template v-slot:trigger>
        <button @click="$props.value = true">modal</button>
      </template>
    </n-modal>
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
  },
  argTypes,
  parameters,
};
