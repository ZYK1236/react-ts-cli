/**
 * @descriptionts代码的时候注意逻辑的严谨性
 *  例如if else要一一对应 
 */

import { Model } from 'react-model'
import moment from 'moment'
// import { string } from 'prop-types'

const initialState = {
  data: 112011201, //unix时间戳
  standardTime: '' //转化后的时间
}

interface StateType {
  data: number
  standardTime: string
}

// 定义actions里面的函数中的参数类型
interface ActionsParamType {
  toStandardTime: boolean	//toStandardTime函数的参数flag类型为boolean
}

const model: ModelType<StateType, ActionsParamType> = {
  actions: {
    async toStandardTime(flag, { state }) {
      if (flag) {
        return {
          standardTime: moment(state.data * 1000).format('YYYY-MM-DD HH:mm:ss')
        }
      } else {
        return {
          standardTime: ''
        }
      }
    }
  },
  state: initialState
}

export default Model(model)
