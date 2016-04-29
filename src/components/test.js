import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// Reducer has the interface `(state, action) => state`
const count = (state = { text: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return { text: action.text }
    default:
      return state
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch({
      type: 'UPDATE_TEXT',
      text: e.target.value,
    }),
  }
}

let WordCountBox = ({ text, onChange }) => {
  return (
    <div className="wordCountBox">
      <h1>Hello, Redux!</h1>
      <textarea
        rows="8"
        cols="80"
        placeholder="Type something..."
        autoFocus="true"
        onChange={onChange}
      >
        {text}
      </textarea>
      <p>Count: {text.length}</p>
    </div>
  )
}

WordCountBox.propTypes = {
  text: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
}

WordCountBox = connect(mapStateToProps, mapDispatchToProps)(WordCountBox)

ReactDOM.render(
  <Provider store={createStore(count)}>
    <WordCountBox />
  </Provider>,
  document.getElementById('counter')
)
