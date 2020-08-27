import React, { useState, useEffect, Fragment } from 'react'
import { Button } from 'antd'
import { demo_post } from '../../service/api/demo'

export default () => {
  const sendAjax = async () => {
    const data = await demo_post({
      departmentAccount: 'zyksb',
      departmentPwd: '123qwe12'
    })
    console.log(data.code, data.data, data.msg)
  }

  return (
    <Fragment>
      <h1>about</h1>
      <Button onClick={sendAjax}>发送ajax</Button>
      <br></br>
    </Fragment>
  )
}
