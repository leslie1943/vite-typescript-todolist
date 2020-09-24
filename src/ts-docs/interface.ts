interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: number | string | undefined;
}

/**
 * 一旦定义了任意属性，那么【确定属性】和【可选属性】的类型都必须是它的类型的子集
 * 可选属性的类型是 number 和 undefined, 所以任意属性的类型要加上 undefined
 */

// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
const tom: Person = {
  id: 111,
  name: "tom",
  age: 22,
  gender: "male",
};

export {};
