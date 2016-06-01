import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { cyan500 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/Footer'
import todo from '../reducers/'
import AddTodo from '../containers/AddTodo'
import { addTodo, toggleTodo, setVisibilityFilter } from '../actions/'

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 80,
  },
})

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
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <div>
        <AppBar title="Logger" />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Provider>
  </MuiThemeProvider>
)

export default App
