import { connect } from 'react-redux'
import NewShiftButton from 'components/NewShiftButton'
import { newShift, closeShift } from 'actions/'

const mapStateToProps = state => {
  console.log(`newShift-state: ${state.shift}`)
  console.log(`NewShiftContainer::mapStateToProps: ${JSON.stringify(state)}`)

  return {
    showNewShiftDialog: state.shift,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(`NewShiftContainer:ownProps: ${ownProps}`)
  return ({
    onNewShiftClick: () => {
      dispatch(newShift(ownProps))
    },
    closeNewShiftDialog: () => {
      dispatch(closeShift())
    },
  })
}

const NewShiftContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewShiftButton)

export default NewShiftContainer
