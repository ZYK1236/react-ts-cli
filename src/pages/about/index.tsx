import React, { useState, useEffect, Fragment } from 'react'
import { Button } from 'antd'
import { demo_post, demo_get } from '../../service/api'
import styles from './index.less'

export default () => {
  console.log(styles);
  
  const sendAjax = async () => {
    const data = await demo_post({
      departmentAccount: 'zyk123',
      departmentPwd: '123qwe12'
    })
  }

  return (
    <Fragment>
      <h1 className={styles.a}>this is about!</h1>
      <Button onClick={sendAjax}>发送ajax</Button>
      <h2 id={styles.id}>try demo</h2>
      <br></br>
    </Fragment>
  )
}
