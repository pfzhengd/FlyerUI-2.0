### Textarea - 可定制属性

| 属性名称        | 类型            | 默认值 | 可选值       | 说明                  |
| --------------- | --------------- | ------ | ------------ | --------------------- |
| value / v-model | String / Number | -      | -            | 绑定的值              |
| type            | String          | -      | text         | 原生 input 的 type 值 |
| disabled        | Boolean         | false  | true / false | 是否设置为禁用        |
| max-length      | Number          | -      | -            | 最大输入长度限制      |
| min-length      | Number          | -      | -            | 最小输入长度限制      |
| placeholder     | String          | -      | -            | 输入框占位文本        |

### Textarea - 可定制的事件

| 事件名称  | 返回值                   | 说明                    |
| --------- | ------------------------ | ----------------------- |
| blur   | (event: Event)           | 在 Input 失去焦点时触发 |
| focus  | (event: Event)           | 在 Input 获得焦点时触发 |
| change | (value: string / number) | 在 Input 值改变时触发   |
