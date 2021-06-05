import axios from 'axios'
import { config } from '../../shared/config'
import { ResponseLoginFunctionType, LoginFunctionType } from './LoginType'

const setJWTLocalStorage = (jwt: string) => {
  const keyJWTLocal = 'jwt'
  localStorage.setItem(keyJWTLocal, jwt)
}

export const LoginFunction = async (data: LoginFunctionType): Promise<ResponseLoginFunctionType> => {
  try {
    const url = `${config.endpointURL}/user/login`
    const { PASSWORD, USER_NAME } = data
    const res = await axios.post(
      url,
      {
        USER_NAME,
        PASSWORD,
      },
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
    const { jwt }: ResponseLoginFunctionType = res.data.msg
    setJWTLocalStorage(jwt)
    return { jwt, status: true }
  } catch (error) {
    return { jwt: '', status: false }
  }
}
