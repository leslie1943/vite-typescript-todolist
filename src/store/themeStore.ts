import { reactive, ref } from 'vue'
export const enum ThemeType {
  LIGHT,
  DARK,
}

interface IStyle {
  color: string
  size: string
}

export let theme = ref(ThemeType.LIGHT)
export let themeStyle: IStyle = reactive({
  color: '',
  size: '',
})

// 创建
export const changeTheme = (): void => {
  if (theme.value === ThemeType.DARK) {
    theme.value = ThemeType.LIGHT
    themeStyle.color = 'rgba(64, 7, 102,0.5)'
  } else if (theme.value === ThemeType.LIGHT) {
    themeStyle.color = 'rgb(56,67,79)'
    theme.value = ThemeType.DARK
  }
  themeStyle.size = '32px'
}
