// 任意T中的属性值
type Partial<T> = {
  [P in keyof T]?: T[P]
}

// 任意 【指定】(根据参数) 的属性
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface User {
  id: number
  age: number
  name: string
}

// type PartialUser = { id?: number; age?: number; name?: string }
type PartialUser = Partial<User>

// type PickUser = { id: number;  age: number}
type PickerUser = Pick<User, "id" | "age">

const lesie: PartialUser = { name: 'suzhen' }
const hellen: PickerUser = { id: 1943, age: 22 }

export { }