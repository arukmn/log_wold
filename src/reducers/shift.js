const shift = (state = false, action) => {
  const defaultValues = {
    isDialogOpen: false,
  }

  switch (action.type) {
  case 'NEW_SHIFT': {
    return Object.assign({}, defaultValues, { isDialogOpen: true })
  }
  case 'CLOSE_SHIFT': {
    return Object.assign({}, defaultValues, { isDialogOpen: false })
  }
  case 'OPEN_SHIFT': {
    return Object.assign({}, defaultValues, { isDialogOpen: false })
  }
  case 'CREATE_SHIFT': {
    return Object.assign({}, defaultValues, { isDialogOpen: false })
  }
  default:
    return state
  }
}

export default shift
