import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/app'

class App extends Component {
  render () {
    return (
      <h1>
        Hello World
      </h1>
    )
  }
}

function mapStateToProps ({ app }) {
  return { app }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(appActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
