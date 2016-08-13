import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import ContentSend from 'material-ui/svg-icons/content/send'
import ActionInfo from 'material-ui/svg-icons/action/info'

const Todo = ({ onClick, completed, text }) => (
  <ListItem
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    primaryText={text}
    leftIcon={<ContentSend />}
    rightIcon={<ActionInfo />}
  />
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default Todo
