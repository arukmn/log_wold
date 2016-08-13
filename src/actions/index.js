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

/* ポップアップのオープン */
export const newShift = ownProps => ({
  type: 'NEW_SHIFT',
  ownProps,
})

/* ポップアップのクローズ */
export const closeShift = () => ({
  type: 'CLOSE_SHIFT',
})

/* 新規シフト申請 */
export const createShift = param => ({
  type: 'CREATE_SHIFT',
  param,
})

export const openShift = id => ({
  type: 'OPEN_SHIFT',
  id,
})


export const beforeUsage = stepIndex => ({
  type: 'BEFORE_USAGE',
  stepIndex,
})

export const nextUsage = stepIndex => ({
  type: 'NEXT_USAGE',
  stepIndex,
})
