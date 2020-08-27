import axios from 'axios'

// 根据接口自定义返回的类型
interface TempAxiosResponse {
  code: number,
  data: Object,
  msg: string
}

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<TempAxiosResponse> {}
}