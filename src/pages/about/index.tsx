import React, { useState, useEffect, Fragment } from 'react'
import { Button } from 'antd'
import { demo_post, demo_get } from '../../service/api'

export default () => {
  const sendAjax = async () => {
    const data = await demo_post({
      departmentAccount: 'zyksb',
      departmentPwd: '123qwe12'
    })
  }

  return (
    <Fragment>
      <h1>about</h1>
      <Button onClick={sendAjax}>发送ajax</Button>
      <br></br>
    </Fragment>
  )
}
