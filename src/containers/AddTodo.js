import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/'

// view
let AddTodo = ({ dispatch }) => {
// let AddTodo = (obj) => {
//   console.log('AddTodo: ', obj)
  let input

  // ref関数にはviewが表示された際に実行されるcb
  return (
    <div>
      <input
        ref={(node) => {
          input = node
        }}
      />
      <button
        onClick={() => {
          const cnt = input.value
          if (cnt && cnt !== '') {
            dispatch(addTodo(input.value))
            input.value = ''
          }
        }}
      >
      Add todo
      </button>
    </div>
  )
}

AddTodo = connect((state) => {
  console.log('AddTodo:state: ', state)
  return null
})(AddTodo)
AddTodo.propTypes = {
  dispatch: PropTypes.string.isRequired,
}

export default AddTodo
