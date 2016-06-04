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

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import DatePicker from 'material-ui/DatePicker'

import injectTapEventPlugin from 'react-tap-event-plugin'

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

console.log(setVisibilityFilter)
// store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <div>
        <AppBar title="Logger" />
        <Card>
          <CardHeader
            title="Notification"
            subtitle="Subtitle"
          />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
        <div>
          <DatePicker hintText="Portrait Inline Dialog" container="inline" />
          <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
        </div>
        <div>
          <DatePicker hintText="Portrait Dialog" />
          <DatePicker hintText="Landscape Dialog" mode="landscape" />
          <DatePicker hintText="Dialog Disabled" disabled />
        </div>
        <div>
          <DatePicker
            floatingLabelText="Submission Start:"
          />
        </div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Provider>
  </MuiThemeProvider>
)

export default App
