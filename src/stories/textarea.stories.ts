// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'

import Textarea from '../components/textarea/index'
import Button from '../components/button/index'

const meta: Meta<typeof Textarea> = {
  // @ts-ignore
  component: Textarea
}

export default meta
type Story = StoryObj<typeof Textarea>;

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
    components: { Textarea, Button },
    template: `
    <div>
      <Textarea placeholder="多行输入" @change='handleChange' v-model="value"></Textarea>
      <Button size='small' type='primary' @click='handleClean'>清空</Button>
    </div>
    `,
    methods: {
      handleClean () {
        this.value = ''
      },
      handleChange () {
        console.log('change', this.value)
      }
    }
  })
}
