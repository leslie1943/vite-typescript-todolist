import { defineComponent } from 'vue'

// BookProp: 使用组件时需要传递的参数
interface BookProp {
  title: string
  author: string
  year?: number
}

// BookProp.props 指向 initProps 则是操作组件内部逻辑的时候使用props来调用传递的参数
const initProp = {
  title: String,
  author: String,
  year: Number,
  test: String
}

const ComponentBook = defineComponent<BookProp>((props) => {
  return () => (
    <div class="Box border-0">
      <div class="Box-row d-flex flex-items-center border-0">
        <span class="flex-auto">
          {props.title}
        </span>
        {props.author} + {props.year}
      </div>
    </div>
  )
})

ComponentBook.props = initProp
export default ComponentBook