const Table = {
  parts: ['th', 'td'],
  variants: {
    simple: {
      th: {
        color: 'red',
        border: 'none',
        textAlign: 'center',
        py: 8,
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: 'normal',
        fontSize:'sm',
        whiteSpace:'wrap'
      },
      td: {
        border:'none'
      }
    }
  },
  baseStyle: {}
}

export default Table
