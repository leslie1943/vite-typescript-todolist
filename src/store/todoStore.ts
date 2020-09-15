import { reactive } from 'vue'

// 定义枚举 todo item 的状态
export const enum TodoStatus {
  TODO,
  FINISHED
}

// todo item 的数据结构
interface Todo {
  id: number
  name: string
  status: TodoStatus
}

// 包含代办项集合的对象
export const todoState = reactive({
  todos: new Array<Todo>()
})

// 创建
export const create = (name: string) => {
  todoState.todos.push({
    id: new Date().getTime(),
    name,
    status: TodoStatus.TODO
  })
}

// 修改状态
export const finish = (id: number) => {
  todoState.todos.find(item => item.id === id).status = TodoStatus.FINISHED
}

// 删除
export const remove = (id: number) => {
  for (let i = 0; i < todoState.todos.length; i++) {
    if (id === todoState.todos[i].id) {
      todoState.todos.splice(i, 1)
      break
    }
  }
}