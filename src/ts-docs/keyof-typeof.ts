// ------------------------ typeof + keyof ------------------------
// typeof 操作符用于获取变量的类型,因此这个操作符后面接的始终是一个变量,且需要运用到类型定义当中
const COLORS = {
  red: true,
  blue: false,
}

// 首先通过 typeof 操作符获取 COLORS 变量的类型,然后通过keyof操作符获取该类型的所有键
// 即 字符串字面量联合类型 'red' | 'blue'
type Colors = keyof typeof COLORS
let color: Colors = 'red'
color = 'blue'
// color = 'black' // Type '"blak"' is not assignable to type '"red" | "blue"'.ts(2322)
console.info(color)

// ------------------------ demo2
type Person = {
  name: string;
  age: number;
  sex: string
}
type Student = keyof Person
// Student: "name" | "age" | "sex"
let xm: Student = "name"


// ------------------------ demo3
// keyof T 索引类型操作符，对于任何类型T keyof T的结果为 T 上已知的公共属性名的联合
const data = {
  a: 1,
  b: 2,
  c: 3
}

// 利用 keyof约束实现get方法
// 第二个参数解析: K 必须是 T中的类型
function get<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const r = get(data, 'a')
console.info(r)