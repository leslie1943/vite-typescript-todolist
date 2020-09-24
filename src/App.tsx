import { defineComponent } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { todoState, TodoStatus } from './store/todoStore'
import { theme, themeStyle } from './store/themeStore'
import { __HREF__ } from './router'
import { RN } from './enum'
// import BookItem from './components/BookItem'
// import ShopItem from './components/ShopItem'
import ThemeChange from './components/ThemeChange'

export default defineComponent(() => {
  const r = useRoute() // this.$route
  return () => (
    <div>
      <header class="masthead" style={{ backgroundImage: `url(home.jpg)` }}>
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>海阔天空</h1>
                <span class="subheading">原谅我这一生不羁放纵爱自由...</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        class="container-sm p-4"
        style={{ backgroundColor: themeStyle.color || '#2e5881' }}
      >
        <ThemeChange />
        <div class="Box">
          <div class="Box-body">
            <nav
              class="container-lg UnderlineNav-container"
              aria-label="Foo bar"
            >
              <div class="container-lg UnderlineNav-container">
                <div class="UnderlineNav-body">
                  <a
                    class="UnderlineNav-item"
                    aria-current={r.name === RN.ALL}
                    href={__HREF__({ name: RN.ALL })}
                  >
                    All
                    <span class="Counter">{todoState.todos.length}</span>
                  </a>
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
    </div>
  )
})
