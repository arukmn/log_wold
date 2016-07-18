import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from '../components/App'
import AppLogic from '../reducers/'

import { addTodo, toggleTodo } from '../actions/'

// catch Tap and Click event
injectTapEventPlugin()

// reducer
// storeに対してactionの結果としてのstateをdispatchする
const store = createStore(AppLogic)


store.dispatch(addTodo('aircloset!'))
store.dispatch(addTodo('test!!'))
store.dispatch(addTodo('arukmn!!!'))
store.dispatch(addTodo('krrn!!!!'))
store.dispatch(toggleTodo(0))

render(
  <App store={store} />,
  document.getElementById('content')
)
