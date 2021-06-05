import { css } from '@emotion/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { MouseEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'
import { IFormInputs } from '../register/type'
import { LoginFunction } from './LoginFunction'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`
const schema = yup.object().shape({
  username: yup.string().required('กรุณากรอก username'),
  password: yup.string().required('กรุณากรอก password').min(5, 'รหัสผ่าน 5 ตัวขึ้นไป'),
})

function Login() {
  let [loading, setLoading] = useState(false)
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const notify = () => {
    toast.error('Login Fail!', {
      position: toast.POSITION.TOP_CENTER,
    })
  }

  const onSubmit = async (data: IFormInputs) => {
    setLoading(true)
    const getDataFromApi = await LoginFunction({ USER_NAME: data.username, PASSWORD: data.password })
    setLoading(false)
    if (!getDataFromApi.status) {
      notify()
    }else{
      history.push('/todo')
    }
  }

  const handleRegister = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    history.replace('/register')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white w-mobile md:w-tablet h-custom1 rounded-xl">
        <h1 className="text-3xl text-center text-sepia-800 mt-14">QSoft Tracking</h1>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded-xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
              Username
            </label>
            <input {...register('username')} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            <p className="text-xs italic text-red-500">{errors.username?.message}</p>
          </div>
          <div className="mb-1">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              {...register('password')}
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-xs italic text-red-500">{errors.password?.message}</p>
          </div>
          <div className="flex items-end justify-between mb-6">
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="w-5 h-5 text-gray-600 form-checkbox" defaultChecked />
              <span className="ml-2 text-gray-700">Stay Connected</span>
            </label>
            <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="/forgot-password">
              Forgot Password?
            </a>
          </div>
          <div className="flex flex-col items-center mb-8">
            <button className="w-full px-4 py-2 font-bold text-white rounded bg-sepia-500 hover:bg-sepia-700 focus:outline-none focus:shadow-outline" type="submit">
              Login
            </button>
            <h1 className="py-2">Or</h1>
            <button onClick={handleRegister} className="w-full px-4 py-2 font-bold text-white rounded bg-sepia-500 hover:bg-sepia-700 focus:outline-none focus:shadow-outline" type="button">
              Register
            </button>
          </div>
          <BarLoader color={loading ? '#d38258' : 'white'} css={override} />
        </form>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  )
}

export default Login
