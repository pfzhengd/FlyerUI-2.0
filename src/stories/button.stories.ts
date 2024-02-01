// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '../components/button/index'

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { Button },
    template: `
    <p>
      <div>按钮类型</div>
      <div>
        <Button>Default</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="info">信息按钮</Button>
      </div>
    </p>
    <br/>
    <p>
      <div>素按钮类型</div>
      <div>
        <Button plain>默认按钮</Button>
        <Button plain type="primary">主要按钮</Button>
        <Button plain type="warning">警告按钮</Button>
        <Button plain type="danger">危险按钮</Button>
        <Button plain type="success">成功按钮</Button>
        <Button plain type="info">信息按钮</Button>
      </div>
    </p>
    `
  })
}
