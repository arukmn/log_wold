const usage = (state = { stepIndex: 0, isFinished: false }, action) => {
  console.log(`usage: ${action}`)
  switch (action.type) {
  case 'NEXT_USAGE': {
    let stepIndex = action.stepIndex
    stepIndex++

    console.log(`MOVEON: ${state} /${action}`)

    return Object.assign({}, state, {
      stepIndex,
      isFinished: stepIndex === 5, // ???
    })
  }
  case 'BEFORE_USAGE': {
    let stepIndex = action.stepIndex
    stepIndex--

    console.log(`BACK: ${state} /${action}`)

    return Object.assign({}, state, {
      stepIndex,
      isFinished: false,
    })
  }
  default:
    console.log(`PROCEED_USAGE:default ${state} /${action}`)
    return state
  }
}

export default usage
