import { defineComponent } from 'vue'
import { theme, changeTheme, ThemeType } from '../store/themeStore'

const ThemeChange = defineComponent({
  props: {},
  setup(props) {
    return () => (
      <div style={{ margin: '40px' }}>
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
