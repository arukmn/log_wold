import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import LABEL from 'settings/label.json'
import setting from 'settings/setting'

const style = setting.pages.login
const Login = () => (
  <div style={style.context}>
    <span style={style.title}>{LABEL.APP}</span>
    <Paper zDepth={5}>
      <TextField hintText="ID" style={style.textField} underlineShow={false} />
      <Divider />
      <TextField hintText="PASS" type="password" style={style.textField} underlineShow={false} />
      <Divider />
    </Paper>
    <RaisedButton
      label="Login"
      primary
      onMouseDown={() => console.log('clicked login button')}
    />
  </div>
)

export default Login
