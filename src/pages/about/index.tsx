import React, { useState, useEffect, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Button, Input } from 'antd'
import { demo_post, demo_get } from '../../service/api'
import styles from './index.less'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  const [ref, setRef] = useState<Input>()

  const sendAjax = async () => {
    const data = await demo_post({
      departmentAccount: 'zyk123',
      departmentPwd: '123qwe12'
    })
    history.push('/home')
  }

  const getRef = () => {
    console.log(ref)
  }

  return (
    <Fragment>
      <h1
        className={styles.a}
        onClick={() => {
          ref.focus()
        }}
      >
        this is about!
      </h1>
      <Input ref={(ref) => setRef(ref)}></Input>
      <Button onClick={getRef}>发送ajax</Button>
      <h2 id={styles.id}>try demo</h2>
      <br></br>
    </Fragment>
  )
}
