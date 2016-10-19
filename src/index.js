import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import reducers from './reducers'
import routes from './routes'

class App extends Component {
  render () {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router
          history={browserHistory}
          routes={routes} />
      </Provider>
    )
  }
}

const createStoreWithMiddleware = (reducers) => {
  return createStore(
    reducers,
    applyMiddleware(ReduxPromise)
  )
}

render(<App />, document.getElementById('react_app'))
