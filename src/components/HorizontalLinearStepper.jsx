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

const HorizontalLinearStepper = ({ stepIndex, isFinished, beforeStep, nextStep }) => (
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
        <div>
          <p>{getStepContent(stepIndex)}</p>
          <div style={{ marginTop: 12 }}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={() => beforeStep(stepIndex)}
              style={{ marginRight: 12 }}
            />
            <RaisedButton
              label={stepIndex === 2 ? 'Finish' : 'Next'}
              disabled={isFinished}
              primary
              onTouchTap={() => nextStep({ stepIndex, isFinished })}
            />
          </div>
        </div>
      </div>
    </div>
  </Card>
)


HorizontalLinearStepper.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  isFinished: PropTypes.bool.isRequired,
  beforeStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
}
export default HorizontalLinearStepper
