import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import App from './pages/index'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
// import { hot } from 'react-hot-loader'

const renderRoot = (Com) =>
  ReactDOM.render(
    <Fragment>
      <Router>
        <Com></Com>
      </Router>
    </Fragment>,
    document.getElementById('app')
  )

renderRoot(App)
