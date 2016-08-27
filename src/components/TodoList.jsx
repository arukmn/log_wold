import React, { PropTypes } from 'react'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Todo from './Todo.jsx'

// VisibleTodoListのtodosオブジェクトと名前を合わせる必要あり？
const TodoList = ({ todos, onTodoClick }) => (
  <List>
    <Subheader>Users</Subheader>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList
