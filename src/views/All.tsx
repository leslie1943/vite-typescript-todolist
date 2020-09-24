import { defineComponent } from 'vue'
import TodoItem from '../components/TodoItem'
import { todoState, TodoStatus, remove } from '../store/todoStore'

export default defineComponent(() => {
  return () => (
    <>
      {todoState.todos.map((it) => (
        <TodoItem test="test" key={it.id} name={it.name} />
      ))}
    </>
  )
})
