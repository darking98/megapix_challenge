const Button = {
  baseStyle: {
    transition: '150ms ease-in-out'
  },
  variants: {
    transparent: {
      background: 'transparent',
      _hover: {
        outline: '1px solid white'
      }
    },
    icon: {
      background: 'transparent',
      px: 2,
      _hover: {
        background: 'darkGray'
      }
    },
    avatar: {
      background: 'transparent',
      borderRadius: '50%',
      border: '2px solid #62FEE2',
      height: '48px',
      width: '48px',
      p: 0,
      _hover: {
        background: 'darkGray'
      }
    },
    aside:{
        height:'52px',
        justifyContent:'flex-start',
        p:4,
        background: 'transparent',
        borderTopLeftRadius:'0px',
        borderBottomLeftRadius:'0px',
        _hover:{
            background:'#333'
        }
    }
  }
}

export default Button
