import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import { Card } from 'material-ui/Card'
import label from 'settings/label.json'

import NewShiftContainer from 'containers/NewShiftContainer'
import TableExampleSimple from './AttendanceTable.jsx'
import Notification from 'containers/Notification'

import Usage from 'containers/Usage'

// temporary
import VisibleTodoList from 'containers/VisibleTodoList'
import Footer from 'components/Footer.jsx'
import AddTodo from 'containers/AddTodo'


const Root = () => (
  <div>
    <AppBar
      title={label.APP}
      showMenuIconButton={false}
    />
    <Notification />
    <Usage />
    <NewShiftContainer />

    <Card style={{ margin: 20, padding: 20 }}>
      <TableExampleSimple />
    </Card>

    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
