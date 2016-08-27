import { connect } from 'react-redux'
import HorizontalLinearStepper from 'components/HorizontalLinearStepper.jsx'
import { beforeUsage, nextUsage } from 'actions/'

const mapStateToProps = state => {
  console.log(`Container:Usage ${JSON.stringify(state, null, '\t')}`)
  console.log(`Container:Usage:usage ${JSON.stringify(state.usage, null, '\t')}`)

  return state.usage
}

const mapDispatchToProps = dispatch => ({
  beforeStep: stepIndex => {
    dispatch(beforeUsage(stepIndex))
  },
  nextStep: props => {
    if (!props.isFinished) {
      dispatch(nextUsage(props.stepIndex))
    }
  },
})

const UsageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalLinearStepper)

export default UsageContainer
