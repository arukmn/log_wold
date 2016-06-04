import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// combineReducersで、複数のReducerを連結することが可能
// createStore(todos)だと、state = [ todo1, todo2 ]となる
// todoAppだと、 state = { todos: [ todo1, todo2 ] } となる
const todoApp = combineReducers({ todos, visibilityFilter })
export default todoApp
