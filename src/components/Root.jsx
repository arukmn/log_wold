import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import { Card } from 'material-ui/Card'
import LABEL from 'settings/label.json'

import NewShiftContainer from 'containers/NewShiftContainer'
import TableExampleSimple from './AttendanceTable.jsx'
import Notification from 'containers/Notification'

import Usage from 'containers/Usage'

// temporary
import VisibleTodoList from 'containers/VisibleTodoList'
import Footer from 'components/Footer.jsx'
import AddTodo from 'containers/AddTodo'

import { Link } from 'react-router'

const Root = () => (
  <div>
    <AppBar
      title={LABEL.APP}
      showMenuIconButton={false}
    />
    <Link to="/foo">Login</Link>
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
