export interface ResponseLoginFunctionType {
  jwt: string,
  status?:boolean
}

export interface LoginFunctionType {
  USER_NAME: string,
  PASSWORD: string
}


export interface IFormInputs {
  email: string
  password: string
}