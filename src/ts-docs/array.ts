// 【类型 + 方括号】表示法
let fibonacci: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["leslie", "hellen", "dora", "mark"];

// 数组泛型 Array<eleType>
let ids: Array<number> = [12, 3, 1, 2, 3];

// 用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let numberList: NumberArray = [1, 2, 3, 4];

interface StringArray {
  [index: number]: string;
}
let namesList: StringArray = ["lelsie", "moon", "John"];

export {};
