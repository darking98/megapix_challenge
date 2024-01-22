import { extendTheme } from '@chakra-ui/react'
import colors from './default/colors'
import space from './default/spacing'
import fontSizes from './default/fontSizes'
import Table from './components/table'
import Button from './components/button'
import Input from './components/input'
const customTheme = extendTheme({
  colors,
  space,
  fontSizes,
  components: {
    Table,
    Button,
    Input
  }
})

export default customTheme
