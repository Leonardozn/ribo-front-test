import { axiosBase } from "../../config/axiosGlobal"

export const getUsers = () => {
  return axiosBase.get(`/client/list`)
}