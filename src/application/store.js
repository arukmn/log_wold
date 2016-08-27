import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'
import reducer from '../reducers/'
// import rootSaga from '../sagas'

// http://qiita.com/kuy/items/716affc808ebb3e1e8ac
export default (initialState) => {
  const saga = createSagaMiddleWare()
  const store = createStore(reducer, initialState, applyMiddleware(saga, logger()))

  // saga.run(rootSaga)
  return store
}
