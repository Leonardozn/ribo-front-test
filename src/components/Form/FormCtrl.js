import { axiosBase } from '../../config/axiosGlobal'

export const saveClient = (body) => {
  axiosBase.post(`/client/add`, body)
  .then(res => alert('Client saved successfully!!'))
  .catch(err => console.log(err.response))
}