// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'

import Input from '../components/input/index'

const meta: Meta<typeof Input> = {
  // @ts-ignore
  component: Input
}

export default meta
type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    data () {
      return {
        value: ''
      }
    },
    components: { Input },
    template: `
    <div>
      <Input placeholder="请输入内容" @change="onChange" v-model="value"></Input>&nbsp;
      <Input placeholder="请输入内容" round></Input>
    </div>
    `,
    methods: {
      onChange (e: any) {
        console.log(e)
      }
    }
  })
}
