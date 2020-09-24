import { defineComponent } from 'vue'

// ComponentPropsOptions: 使用组件时需要传递的参数
interface TodoItemProp {
  test: String
  name: string
  btnText: string
  onBtnClick: () => void
}

// TodoItem.props 指向 initProps 则是操作组件内部逻辑的时候使用props来调用传递的参数
const initProps = {
  test: String,
  name: String,
  btnText: String,
  onBtnClick: Function as any,
}

/**
 * TodoItemProp 要求在使用组件的时候需要传递的数据(个数,类型)
 */
const TodoItem = defineComponent<TodoItemProp>((props) => {
  return () => (
    <div class="Box border-0">
      <div class="Box-row d-flex flex-items-center border-0">
        <span class="flex-auto">{props.name}</span>
        <button
          onClick={props.onBtnClick}
          type="button"
          class="btn btn-sm"
          name="button"
        >
          {props.btnText}
        </button>
      </div>
    </div>
  )
})

/**
 * TodoItem.props 指向 initProps 则是操作组件内部逻辑的时候使用props来调用传递的参数
 */
TodoItem.props = initProps

export default TodoItem
