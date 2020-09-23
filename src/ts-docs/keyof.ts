/**
 * keyof 和 Object.keys 略有相似, 不过 keyof 取 interface 的键
 */
interface Point {
  x: number;
  y: number;
}

const data = {
  name: 'leslie',
  age: 18
}

type PointKyes = keyof Point // pointKyes = "x" | "y"
const px: PointKyes = 'x'
const py: PointKyes = 'y'
// const pz: PointKyes = 'z' // Type '"z"' is not assignable to type '"x" | "y"'.ts(2322)


type dataKeys = keyof typeof data  // 这个 typeof 是不是可以理解成 data对象的属性:value类型解析一次

export { }