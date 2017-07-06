import { requestLogin } from '../api/api'

export const UserLogin = ({ commit }, loginData) => {
  requestLogin(loginData).then(res => {
  })
}
