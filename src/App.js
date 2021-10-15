import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import locale from './locale'
import actions from './store/actions'
import types from './store/constant'
class App extends Component {
  render () {
    const { intl, changLanguage, language } = this.props
    console.log(intl.formatMessage({ id: 'text' }))
    return <div className="App">
      {
        locale.languages.map(i =>
          <button key={i.symbol} onClick={() => changLanguage(i.locale)}>{i.text}</button>
        )
      }
      <p>
        {language}: {intl.formatMessage({ id: 'text' })}
      </p>
    </div>
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    language: state.root.language
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changLanguage: (val) => dispatch(actions[types.CHANGE_LANGUAGE](val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(App))