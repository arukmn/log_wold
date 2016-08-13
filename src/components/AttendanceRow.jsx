import React, { PropTypes } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'

const AttendanceRow = ({ id, name, status, onClick }) => (
  <TableRow>
    <TableRowColumn>{id}</TableRowColumn>
    <TableRowColumn>{name}</TableRowColumn>
    <TableRowColumn>{status}</TableRowColumn>
    <TableRowColumn>
      <RaisedButton
        label="SHOW"
        primary
        onMouseDown={() => onClick()}
      />
    </TableRowColumn>
  </TableRow>
)

AttendanceRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AttendanceRow
