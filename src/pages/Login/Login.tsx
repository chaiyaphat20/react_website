import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { css } from '@emotion/react'
import { HashLoader
} from 'react-spinners'

import * as yup from 'yup'

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

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  ">
      <div className=" w-mobile md:w-tablet h-custom1 rounded-xl bg-white">
        <h1 className="text-sepia-800 text-3xl mt-14 text-center">QSoft Tracking</h1>
        <form className="bg-white  rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input {...register('email')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              {...register('password')}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">{errors.password?.message}</p>
          </div>
          <div className="flex items-end justify-between mb-6">
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" defaultChecked />
              <span className="ml-2 text-gray-700">Stay Connected</span>
            </label>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="flex flex-col items-center mb-8">
            <button onClick={notify} className="w-full bg-sepia-500  hover:bg-sepia-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Login
            </button>
            <h1 className="py-2">Or</h1>
            <button onClick={() => setLoading(!loading)} className="w-full bg-sepia-500 hover:bg-sepia-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login With AD
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
