import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Root from 'components/Root.jsx'
import Login from 'components/Login.jsx'
import reducer from '../reducers/'
import setting from 'settings/setting'

import { addTodo, toggleTodo } from '../actions/'

// # Role
// * call injectTapEventPlugin function
// * create store in Redux

// process error handler
process.on('unhandledRejection', err => (
  console.log(`Occured unhandledRejection by ${JSON.stringify(err)}`))
)

// catch Tap and Click event
injectTapEventPlugin()

// reducer
// storeに対してactionの結果としてのstateをdispatchする
// const test = applyMiddleware(thunk)(createStore)
// const store = test(reducer)
const store = applyMiddleware(thunk, createLogger())(createStore)(reducer)
const history = syncHistoryWithStore(browserHistory, store)


store.dispatch(addTodo('aircloset!'))
store.dispatch(addTodo('test!!'))
store.dispatch(addTodo('arukmn!!!'))
store.dispatch(addTodo('krrn!!!!'))
store.dispatch(toggleTodo(0))

render(
  <MuiThemeProvider muiTheme={setting.muiTheme}>
    <Provider store={store}>
      { /* Tell the Router to use our enhanced history */}
      <Router history={history}>
        <Route path="/" component={Root}>
          <Route path="/foo" component={Login} />
        </Route>
        <Route path="/foo" component={Login} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('content')
)
