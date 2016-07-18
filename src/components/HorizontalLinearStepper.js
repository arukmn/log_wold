import React, { PropTypes } from 'react'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardTitle } from 'material-ui/Card'


// const contentStyle = { margin: '0 16px' }
const getStepContent = (stepIndex) => {
  switch (stepIndex) {
  case 0:
    return 'Select campaign settings...'
  case 1:
    return 'What is an ad group anyways?'
  case 2:
    return 'This is the bit I really care about!'
  default:
    return 'You\'re a long way from home sonny jim!'
  }
}
const handleNext = () => {
  // TODO call actionCreator of redux
  const { stepIndex } = this.state
  this.setState({
    stepIndex: stepIndex + 1,
    finished: stepIndex >= 2,
  })
}
const handlePrev = () => {
  // TODO call actionCreator of redux
  const { stepIndex } = this.state
  if (stepIndex > 0) {
    this.setState({ stepIndex: stepIndex - 1 })
  }
}

const HorizontalLinearStepper = (props = { stepIndex: 0, finished: false }) => {
  console.log(`HorizontalLinearStepper: ${JSON.stringify(props, null, '\t')}`)

  const stepIndex = props.stepIndex
  const finished = props.finished

  return (
    <Card style={{ margin: 20, padding: 20 }}>
      <CardTitle title="basic usage" />

      <div style={{ width: '100%', maxWidth: 700 }}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
        </Stepper>
        <div>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  this.setState({ stepIndex: 0, finished: false })
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{getStepContent(stepIndex)}</p>
              <div style={{ marginTop: 12 }}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={handlePrev}
                  style={{ marginRight: 12 }}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary
                  onTouchTap={handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

HorizontalLinearStepper.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  finished: PropTypes.bool.isRequired,
}
export default HorizontalLinearStepper
