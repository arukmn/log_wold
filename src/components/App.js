import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import label from 'settings/label.json'
import setting from 'settings/setting'

import NewShiftContainer from 'containers/NewShiftContainer'
import HorizontalLinearStepper from './HorizontalLinearStepper'
import TableExampleSimple from './AttendanceTable'
import Notification from 'containers/Notification'

// temporary
import VisibleTodoList from 'containers/VisibleTodoList'
import Footer from 'components/Footer'
import AddTodo from 'containers/AddTodo'


const App = ({ store }) => (
  <MuiThemeProvider muiTheme={setting.muiTheme}>
    <Provider store={store}>
      <div>
        <div>
          <AppBar
            title={label.APP}
            showMenuIconButton={false}
          />
          <Notification />
          <HorizontalLinearStepper />
          <NewShiftContainer />
          <TableExampleSimple />
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    </Provider>
  </MuiThemeProvider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App

// import SideBar from './SideBar'

        // <SideBar />
        // <div style={{ paddingLeft: 256 }}>
