import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import shift from './shift'
import usage from './usage'

// combineReducersで、複数のReducerを連結することが可能
// createStore(todos)だと、state = [ todo1, todo2 ]となる
// todoAppだと、 state = { todos: [ todo1, todo2 ] } となる
const reducers = { todos, visibilityFilter, shift, usage }
export default combineReducers({ ...reducers, routing: routerReducer })
