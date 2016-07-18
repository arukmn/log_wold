import React, { PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import NewShiftDialog from 'components/NewShiftDialog'

const fabStyle = {
  position: 'fixed',
  bottom: 20,
  right: 20,
}

// const NewShiftButton = ({ onNewShiftClick, showNewShiftDialog }) => (
//   <div>
//     <FloatingActionButton secondary style={fabStyle} onClick={onNewShiftClick}>
//       <ContentAdd />
//     </FloatingActionButton>
//     <NewShiftDialog props={showNewShiftDialog} />
//   </div>
// )

// const NewShiftButton = (props, dis) => {
const NewShiftButton = ({ onNewShiftClick, closeNewShiftDialog, showNewShiftDialog }) => {
  console.log(`NewShiftButton:onNewShiftClick, ${JSON.stringify(onNewShiftClick)}`)
  console.log(`NewShiftButton:showNewShiftDialog, ${JSON.stringify(showNewShiftDialog)}`)
  // let { onNewShiftClick, showNewShiftDialog } = props
  return (
    <div>
      <FloatingActionButton secondary style={fabStyle} onClick={onNewShiftClick}>
        <ContentAdd />
      </FloatingActionButton>
      <NewShiftDialog props={{ showNewShiftDialog, closeNewShiftDialog }} />
    </div>
  )
}

NewShiftButton.propTypes = {
  onNewShiftClick: PropTypes.func.isRequired,
  closeNewShiftDialog: PropTypes.func.isRequired,
  showNewShiftDialog: PropTypes.bool.isRequired,
}

export default NewShiftButton
