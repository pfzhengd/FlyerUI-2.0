// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'

import Alert from '../components/alert/index'

const meta: Meta<typeof Alert> = {
  component: Alert
}

export default meta
type Story = StoryObj<typeof Alert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { Alert },
    template: `
    <p>
      <div>基本例子</div>
      <br/>
      <div>
        <div class="fly-demo-block__row">
          <Alert type="success" title="这是一个成功的提示."></Alert>
        </div>
        <br/>
        <div class="fly-demo-block__row">
          <Alert type="warning" title="这是一个警告的提示."></Alert>
        </div>
        <br/>
        <div class="fly-demo-block__row">
          <Alert type="info" title="这是一个简单的信息提示."></Alert>
        </div>
        <br/>
        <div class="fly-demo-block__row">
          <Alert type="danger" title="这是一个简单的危险提示."></Alert>
        </div>
      </div>
    </p>
    `
  })
}
