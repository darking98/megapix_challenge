import { extendTheme } from '@chakra-ui/react'
import colors from './default/colors'
import space from './default/spacing'
import fontSizes from './default/fontSizes'
import Table from './components/table'
import Button from './components/button'
const customTheme = extendTheme({
  colors,
  space,
  fontSizes,
  config: {
    initialColorMode: 'light'
  },
  components: {
    Table,
    Button
  }
})

export default customTheme
