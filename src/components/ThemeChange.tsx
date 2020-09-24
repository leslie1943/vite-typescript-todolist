import { defineComponent } from 'vue'
import { theme, changeTheme } from '../store/themeStore'
import { ThemeType } from '../enum/index'

const ThemeChange = defineComponent({
  props: {},
  setup(props) {
    return () => (
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={changeTheme}
          type="button"
          class="btn btn-sm"
          name="button"
        >
          {theme.value === ThemeType.LIGHT ? 'Dark Theme' : 'Light Theme'}
        </button>
      </div>
    )
  },
})

export default ThemeChange
