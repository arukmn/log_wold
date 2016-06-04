let nextTodoId = 0

export const addTodo = text => ({
  id: nextTodoId++,
  type: 'ADD_TODO',
  text,
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})
