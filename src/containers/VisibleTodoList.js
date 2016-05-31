import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return todos
  case 'SHOW_COMPLETED':
    return todos.filter(todo => todo.completed)
  case 'SHOW_ACTIVE':
    return todos.filter(todo => !todo.completed)
  default:
    return todos
  }
}

// storeに在る、todosをpropsとして扱えるようにしている
const mapStateToProps = (state) => {
  console.log(`VisibleTodoList:mapStateToProps: ${state}`)

  const obj = {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  }
  return obj
}

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id))
  },
})

// connectメソッドが関数を返し、TodoListを引数にして実行している
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
