import { defineComponent } from 'vue'
import TodoItem from '../components/TodoItem'
import { todoState, TodoStatus, remove } from '../store/todoStore'

export default defineComponent(() => {
  return () => (
    <>
      {todoState.todos.filter(it => it.status === TodoStatus.FINISHED).map(it => (
        <TodoItem
          test="test string"
          key={it.id}
          name={it.name}
          btnText='Delete'
          onBtnClick={() => remove(it.id)} />
      ))}
    </>
  )
})
