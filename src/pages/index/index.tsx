import { Layout, Menu, Breadcrumb, Button } from 'antd'
import { hot } from 'react-hot-loader/root'
import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { useHistory, Route, Redirect } from 'react-router-dom'
import { useStore } from '../../model/index'
import Home from '../home'
import About from '../about'
import styles from './index.less'

const { Header, Content, Footer } = Layout
const App = () => {
  const history = useHistory()
  const [state, actions] = useStore('Example')

  const clickToRouter = (key: any) => {
    if (key == '1') history.push('/home')
    else history.push('/about')
  }

  const showRightTime = async () => {
    await actions.toStandardTime(true)
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={(item) => clickToRouter(item.key)}>
            Home
          </Menu.Item>
          <Menu.Item key="2" onClick={(item) => clickToRouter(item.key)}>
            About
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.layout} ref={(ref) => console.log(ref)}>
          <h1>{state.standardTime}</h1>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Redirect from="/" to="/home"></Redirect>
          <Button
            type="primary"
            onClick={showRightTime}
            ref={(ref) => console.log(ReactDom.findDOMNode(ref), ref)}
          >
            点击显时间(显示时间说明model运行ing)
          </Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>react + ts脚手架</Footer>
    </Layout>
  )
}

export default hot(App)
