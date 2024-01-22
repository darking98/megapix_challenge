const Button = {
  baseStyle: {
    transition: '150ms ease-in-out',
    fontWeight: '600'
  },
  variants: {
    transparent: {
      background: 'transparent',
      _hover: {
        outline: '1px solid white'
      }
    },
    primary: {
      background: 'primary',
      borderColor: 'primary',
      color: 'black',
      _hover: {
        _disabled: {
          bg: 'primary'
        }
      }
    },
    secondary: {
      background: 'darkGray',
      outline: '1px solid white',
      color: 'white'
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
    aside: {
      height: '52px',
      justifyContent: 'flex-start',
      p: 4,
      background: 'transparent',
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px',
      _hover: {
        background: '#333'
      }
    },
    navbarMain: {
      height: '60px',
      width: '60px',
      background: 'primary',
      borderRadius: '50%',
      color: 'black',
      fontSize: '18px',
      _focus: {
        background: 'primary',
        opacity: '0.8'
      }
    }
  }
}

export default Button
