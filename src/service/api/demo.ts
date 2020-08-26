import service from '../index'

export default () => {
  service({
    method: 'get',
    url: 'http://localhost:3000/dt1_1',
  })
}