// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'

import Checkbox from '../components/checkbox/index'
import Button from '../components/button/index'

const meta: Meta<typeof Checkbox> = {
  // @ts-ignore
  component: Checkbox
}

export default meta
type Story = StoryObj<typeof Checkbox>;
const allCityValue = [0, 1, 2, 3]
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    data () {
      return {
        checked: false,
        checked1: true,
        city: '',
        value: '',
        citys: ['东莞'],
        selectedItems: [],
        selectAll: false,
        indeterminate: false,
        options: [{
          label: '北京',
          value: 0
        }, {
          label: '深圳',
          value: 1
        }, {
          label: '东莞',
          value: 2
        }, {
          label: '杭州',
          value: 3
        }]
      }
    },
    components: { Checkbox, Button },
    template: `
      <p>
        <div>
          <Checkbox v-model="checked1" name="checked1">
            是否选中
          </Checkbox>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type='primary' size='small' @click="handleChecked">控制</Button>
          {{ checked1 }}
        </div>
      </p>
    `,
    // <p>
    //     <Checkbox checked></Checkbox>
    //     <Checkbox v-model="checked" @change='handleChange' name="checked">
    //       是否选中
    //     </Checkbox>
    //   </p>
    methods: {
      handleChange (value) {
        console.log('handleChange', value)
        console.log(this.checked,
          this.checked1,
          this.city,
          this.value)
      },
      handleChangeGroup (value) {
        console.log('handleChangeGroup', value)
      },
      handleSelectAll (value) {
        console.log('handleSelectAll', value)
        this.indeterminate = value
        this.selectedItems = value ? allCityValue : []
        this.indeterminate = false
      },
      handleChangeCheckboxGroup (values) {
        this.selectAll = values.length === this.options.length && values.length > 0
        this.indeterminate = values.length > 0 && values.length < this.options.length
        console.log('selectAll', this.selectAll)
        console.log('indeteminate', this.indeterminate)
      },
      handleChecked () {
        console.log('this.checked1', this.checked1)
        this.checked1 = !this.checked1
        this.renderKey++
      }
    }
  })
}
