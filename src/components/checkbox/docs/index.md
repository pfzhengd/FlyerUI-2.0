### 复选框 - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明                                                               |
| --------------- | ------------------------- | ------ | ------------ | ------------------------------------------------------------------ |
| value / v-model | String / Number / Boolean | -      | -            | 绑定的值                                                           |
| label           | String / Number / Boolean | -      | -            | 选中状态的值（只有在 checkbox-group 或者绑定对象类型为数组时有效） |
| disabled        | Boolean                   | false  | true / false | 是否设置为禁用                                                     |
| true-label      | String / Number / Boolean     | -      | -            | 选中时的值                                                         |
| false-label     | String / Number / Boolean     | -      | -            | 没有选中时的值                                                     |
| name            | String                    | -      | -            | 原生 name 属性                                                     |
| checked         | Boolean                   | false  | true / false | 当前是否勾选(只有在单独使用 checkbox 时有效)                       |
| indeterminate   | Boolean                   | false  | true / false | 设置 indeterminate 状态，只负责样式控制                            |

### 复选框 - 可定制的事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| change | 更新后的值 | 在点击选项状态变更时触发。 |

### 复选框组 - 可定制属性

| 属性名称        | 类型  | 默认值 | 可选值 | 说明     |
| --------------- | ----- | ------ | ------ | -------- |
| value / v-model | Array | -      | -      | 绑定的值 |

### 复选框组 - 可定制事件

| 事件名称  | 返回值 | 说明                       |
| --------- | ------ | -------------------------- |
| change | [...]  | 在点击选项状态变更时触发。 |
