import { defineComponent } from "vue";
import { RouterView, useRoute } from "vue-router";
import { todoState, TodoStatus } from "./store/todoStore";
import { __HREF__ } from "./router";
import { RN } from "./enum";
import BookItem from "./components/BookItem";
import ShopItem from "./components/ShopItem";
// import Input from './components/Input'

export default defineComponent(() => {
  const r = useRoute(); // this.$route
  return () => (
    <div class="container-sm p-4">
      <ShopItem
        brand="海尔"
        item={{ brand: "青岛", spec: "天下无双", origin: 2 }}
      />
      <BookItem title="Dance with Wolf" author="leslie 1" year={2000} />
      <BookItem title="Glory days" author="leslie 2" year={2000} />
      <BookItem title="Legend of the Fall" author="Jim Harrison" year={1994} />
      {/* <Input value={'sss'} onChange={(val) => console.info(val)} /> */}
      <div class="Box">
        <div class="Box-body">
          <nav class="container-lg UnderlineNav-container" aria-label="Foo bar">
            <div class="container-lg UnderlineNav-container">
              <div class="UnderlineNav-body">
                <a
                  class="UnderlineNav-item"
                  aria-current={r.name === RN.TODO}
                  href={__HREF__({ name: RN.TODO })}
                >
                  Todo
                  <span class="Counter">
                    {
                      todoState.todos.filter(
                        (it) => it.status === TodoStatus.TODO
                      ).length
                    }
                  </span>
                </a>
                <a
                  class="UnderlineNav-item"
                  aria-current={r.name === RN.DONE}
                  href={__HREF__({ name: RN.DONE })}
                >
                  Done
                  <span class="Counter">
                    {
                      todoState.todos.filter(
                        (it) => it.status === TodoStatus.FINISHED
                      ).length
                    }
                  </span>
                </a>
              </div>
            </div>
          </nav>
          <RouterView />
        </div>
      </div>
    </div>
  );
});
