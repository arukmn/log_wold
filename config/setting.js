import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default {
  muiTheme: getMuiTheme({
    appBar: {
      height: 80,
    },
  }),
  pages: {
    login: {
      context: {
        margin: '0 auto',
        width: 450,
      },
      title: {
        color: '#20AFEA',
        fontSize: 64,
        padding: 16,
        marginTop: 16,
        lineHeight: 'initial',
      },
      textField: {
        marginLeft: 20,
      },
    },
  },
}
