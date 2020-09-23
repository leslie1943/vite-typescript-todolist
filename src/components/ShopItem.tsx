import { defineComponent } from 'vue'
import './ShopItem.css'

// 声明 props.item的格式
interface ItemDetail {
  brand: string
  spec: string
  origin: number
}

const ShopItem = defineComponent({
  props: {
    brand: String,
    item: {
      /**
       * item 是个普通对象, type的值只能是值不能只是个声明
       * 声明和值要区别开,定义的接口是声明,不能作为值用,所以这里就用了这种方式
       */
      type: Object as () => ItemDetail,
      required: true
    }
  },
  setup(props) {
    console.info(props)
    return () => (
      <div>
        <div class="brand">{props.brand}</div>
        <div>{props.item.brand}</div>
        <div>{props.item.spec}</div>
      </div>
    )
  }
})

export default ShopItem