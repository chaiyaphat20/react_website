import { MouseEvent, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { css } from '@emotion/react'
import { HashLoader
} from 'react-spinners'

import * as yup from 'yup'
import { useHistory } from 'react-router-dom'

interface IFormInputs {
  email: string
  password: string
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const schema = yup.object().shape({
  email: yup.string().required('กรุณากรอกอีเมลล์').email('รูปแบบอีเมลล์ไม่ถูกต้อง'),
  password: yup.string().required('กรุณากรอกรหัสผ่าน').min(6, 'รหัสผ่าน 6 ตัวขึ้นไป'),
})


function Login() {
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#d38258')
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: IFormInputs) => console.log(data)

  const notify = () => {
    toast.error('Login Fail ไม่พบบัญชีนี้', {
      position: toast.POSITION.TOP_CENTER,
    })
  }

  const handleRegister = (e:MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    // setLoading(!loading)
    history.replace('/register')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white w-mobile md:w-tablet h-custom1 rounded-xl">
        <h1 className="text-3xl text-center text-sepia-800 mt-14">QSoft Tracking</h1>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded-xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
              Email
            </label>
            <input {...register('email')} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            <p className="text-xs italic text-red-500">{errors.email?.message}</p>
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
            <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="flex flex-col items-center mb-8">
            <button onClick={notify} className="w-full px-4 py-2 font-bold text-white rounded bg-sepia-500 hover:bg-sepia-700 focus:outline-none focus:shadow-outline" type="submit">
              Login
            </button>
            <h1 className="py-2">Or</h1>
            <button onClick={handleRegister} className="w-full px-4 py-2 font-bold text-white rounded bg-sepia-500 hover:bg-sepia-700 focus:outline-none focus:shadow-outline" type="button">
              Register
            </button>
          </div>
          <HashLoader color={loading?color:"white"}  css={override} size={20} />
        </form>
        <ToastContainer  position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  )
}

export default Login
