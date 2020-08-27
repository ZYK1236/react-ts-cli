import service from '../index'

interface RequestResObjT {
  departmentId: number,
  organizationId: number
}

interface RequestResObj {
  t: RequestResObjT,
  token: string
}

export const demo_get = async () =>
  await service.get('http://localhost:3000/dt1_1')

export const demo_post = async (data) => await service.post<RequestResObj>('/department/login', data)
