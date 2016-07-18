const shift = (state = false, action) => {
  switch (action.type) {
  case 'NEW_SHIFT': {
    // const returnVal = Object.assign({}, state, {
    //   showNewShiftDialog: true,
    // })

    console.log(`shift: test: ${JSON.stringify(action)}`)

    return true
  }
  case 'CLOSE_SHIFT': {
    console.log('CLOSE_SHIFT')
    return false
  }
  case 'CREATE_SHIFT': {
    return false
  }
  default:
    return state
  }
}

export default shift
