// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'

import Card from '../components/card/index'

const meta: Meta<typeof Card> = {
  component: Card
}

export default meta
type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { Card },
    template: `
    <p>
      <div>基本例子</div>
      <br/>
      <Card>
        <div slot="header">Title</div>
        <ul>
          <li>content1</li>
          <li>content2</li>
          <li>content3</li>
        </ul>
      </Card>
    </p>
    `
  })
}
