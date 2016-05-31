import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/Footer'
import todo from '../reducers/'
import AddTodo from '../containers/AddTodo'
import { addTodo, toggleTodo, setVisibilityFilter } from '../actions/'

// reducer: todoApp
let store = createStore(todo)
// storeに対してactionの結果としてのstateをdispatchする
// reducerの処理が走る
store.dispatch(addTodo('aircloset!'))
store.dispatch(addTodo('test!!'))
store.dispatch(addTodo('arukmn!!!'))
store.dispatch(addTodo('krrn!!!!'))
store.dispatch(toggleTodo(0))
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))

const App = () => (
  <Provider store={store}>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>
)

export default App
