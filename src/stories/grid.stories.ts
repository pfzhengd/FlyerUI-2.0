// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'

import Row from '../components/row/index'
import Col from '../components/col/index'
import './global.css'

const meta: Meta<typeof Row> = {
  // @ts-ignore
  component: Row
}

export default meta
type Story = StoryObj<typeof Row>;

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
    components: { Row, Col },
    template: `
    <div>
      <Row class="bg-row">
        <Col class="bg-col-first"></Col>
      </Row>
      <Row class="bg-row">
        <Col :span="4">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-second"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-second"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-second"></div>
        </Col>
      </Row>
      <Row class="bg-row">
        <Col :span="8">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="8">
          <div class="bg-col-second"></div>
        </Col>
        <Col :span="8">
          <div class="bg-col-first"></div>
        </Col>
      </Row>
      <Row class="bg-row">
        <Col :span="12">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="12">
          <div class="bg-col-second"></div>
        </Col>
      </Row>
    </div>
    <br/>
    <div>
      <Row class="bg-row" type="flex" :gutter="20">
        <Col :span="4">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-second"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-second"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="4">
          <div class="bg-col-second"></div>
        </Col>
      </Row>
      <Row class="bg-row" type="flex">
        <Col class="bg-col-first"></Col>
      </Row>
      <Row class="bg-row" type="flex">
        <Col :span="8">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="8">
          <div class="bg-col-second"></div>
        </Col>
        <Col :span="8">
          <div class="bg-col-first"></div>
        </Col>
      </Row>
      <Row class="bg-row" type="flex">
        <Col :span="12">
          <div class="bg-col-first"></div>
        </Col>
        <Col :span="12">
          <div class="bg-col-second"></div>
        </Col>
      </Row>
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
