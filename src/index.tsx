import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import App from './pages/index'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

ReactDOM.render(
  <Fragment>
    <Router>
      <App></App>
    </Router>
  </Fragment>,
  document.getElementById('app')
)
