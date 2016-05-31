const todo = (state, action) => {
  // どのようなときにdefaultを通るのかわからん確か結構重要だったはず
  switch (action.type) {
  case 'ADD_TODO':
    return {
      id: action.id,
      text: action.text,
      completed: false,
    }
  case 'TOGGLE_TODO':
    if (state.id !== action.id) {
      return state
    }
    return Object.assign({}, state, {
      completed: !state.completed,
    })
  default:
    return state
  }
}

const todos = (state = [], action) => {
  console.log('krr: ', state)

  // ...stateをすると、配列内の全要素を列挙してくれる。なので、[ ...state, obj ]でstateの全要素+objの新しい配列を作成することが出来る
  // 今在るstateを全て保持した上で、新しい要素を追加して返してるので前の情報も所持することができてる。また、stateが既に配列だからpushすれば良いと思うが、
  // reduxは必ず新しいstateを返さなければならない(immutable)ためpushを使用することができない
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      todo(undefined, action),
    ]
  case 'TOGGLE_TODO':
    return state.map(t => todo(t, action))
  default:
    return state
  }
}

export default todos
