### Input - 可定制属性

| 属性名称        | 类型            | 默认值 | 可选值       | 说明                  |
| --------------- | --------------- | ------ | ------------ | --------------------- |
| value / v-model | String / Number | -      | -            | 绑定的值              |
| type            | String          | -      | text         | 原生 input 的 type 值 |
| disabled        | Boolean         | false  | true / false | 是否设置为禁用        |
| readonly        | Boolean         | false  | true / false | 是否设置为只读        |
| round           | Boolean         | false  | true / false | 是否是圆角展示（不支持复合型输入框）        |
| size            | String         | medium  | large / medium / small | 输入框占位文本        |
| clearable       | Boolean         | flase  | true / false | 是否设置为可清除      |
| max-length      | Number          | -      | -            | 最大输入长度限制      |
| min-length      | Number          | -      | -            | 最小输入长度限制      |
| prefix-icon     | String          | -      | -            | 输入框头部图标        |
| suffix-icon     | String          | -      | -            | 输入框尾部图标        |
| placeholder     | String          | -      | -            | 输入框占位文本        |

### Input - 可定制的事件

| 事件名称  | 返回值                   | 说明                                        |
| --------- | ------------------------ | ------------------------------------------- |
| blur   | (event: Event)           | 在 Input 失去焦点时触发                     |
| focus  | (event: Event)           | 在 Input 获得焦点时触发                     |
| change | (value: string / number) | 在 Input 值改变时触发                       |
| clear  | -                        | 在点击由 clearable 属性生成的清空按钮时触发 |

### Input - Slot

| 事件名称 | 说明                                  |
| -------- | ------------------------------------- |
| prefix   | 输入框头部内容，只对 type="text" 有效 |
| suffix   | 输入框尾部内容，只对 type="text" 有效 |
| prepend  | 输入框前置内容，只对 type="text" 有效 |
| append   | 输入框后置内容，只对 type="text" 有效 |

### Select - 可定制方法

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | -    |
| blur   | 使 input 失去焦点 | -    |