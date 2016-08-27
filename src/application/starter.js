import { render } from 'react-dom'
import createStore from './store'
import createRouter from './router.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'


import { addTodo, toggleTodo } from '../actions/'

// process error handler
process.on('unhandledRejection', err => (
  console.error(`Occured unhandledRejection by ${JSON.stringify(err)}`))
)

// catch Tap and Click event
injectTapEventPlugin()

// initialState => createStore(initialState)
const store = createStore()
const router = createRouter(store)

store.dispatch(addTodo('aircloset!'))
store.dispatch(addTodo('test!!'))
store.dispatch(addTodo('arukmn!!!'))
store.dispatch(addTodo('krrn!!!!'))
store.dispatch(toggleTodo(0))

render(router, document.getElementById('content'))
