import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import setting from 'settings/setting'

import Root from 'components/Root.jsx'
import Login from 'components/Login.jsx'

export default (store) => {
  const history = syncHistoryWithStore(browserHistory, store)

  // # Role
  // * call injectTapEventPlugin function
  // * create store in Redux
  return (
    <MuiThemeProvider muiTheme={setting.muiTheme}>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Root} />
          <Route path="/foo" component={Login} />
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}
