interface Point {
  x: number
  y: number
}


// 获取 Point的keys,作为类型, 被这个类型修饰的变量只能被赋值为了 这些keys
type PointKeys = keyof Point

const px: PointKeys = 'x'
const py: PointKeys = 'y'
// const pz: PointKeys = 'z' // Type '"z"' is not assignable to type '"x" | "y"'.ts(2322)


// ----------------------------- Demo
interface PositionProps {
  positionX: PointKeys
  positionY: PointKeys
}

const printPosition = <T extends PositionProps, K extends PointKeys>(params: T, name: K): T => {
  console.info(params.positionX)
  console.info(params.positionY)
  return params
}

printPosition({ positionX: 'x', positionY: 'y' }, 'x')


// ----------------------------- Demo

const person: PersonProp = {
  name: 'leslie',
  age: 18
}
interface PersonProp {
  name: string
  age: number,
  gender?: string
}

// 参数T: 对象
// 参数T: 对象中的keys取值
const getName = <T extends PersonProp, K extends keyof T>(o: T, name: K) => {
  return o[name]
}
getName(person, "name")

export { }