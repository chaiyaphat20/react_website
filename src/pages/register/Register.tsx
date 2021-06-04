import { css } from '@emotion/react'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { MouseEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'

interface IFormInputs {
  username: string
  firstname: string
  lastname: string
  cvcode: string
  email: string
  password: string
  confirmPassword: string
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const schema = yup.object().shape({
  email: yup.string().required('กรุณากรอกอีเมลล์').email('รูปแบบอีเมลล์ไม่ถูกต้อง'),
  username: yup.string().required('กรุณากรอก username'),
  firstname: yup.string().required('กรุณากรอก first name'),
  lastname: yup.string().required('กรุณากรอก last name'),
  cvcode: yup.string().required('กรุณากรอก cvcode'),
  password: yup.string().required('กรุณากรอกรหัสผ่าน').min(6, 'รหัสผ่าน 6 ตัวขึ้นไป'),
  confirmPassword: yup.string().required('กรุณากรอกรหัสผ่าน').min(6, 'รหัสผ่าน 6 ตัวขึ้นไป'),
})

function Register() {
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#d38258')
  let [selectedTitle, setSelectedTitle] = useState(1)
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data: IFormInputs) => {
    const url = 'http://0276a66df5cc.ngrok.io/user/register'
    const res = await axios.post(
      url,
      {
        USER_NAME: 'data.username',
        PASSWORD: 'data.password',
        FIRST_NAME: 'data.firstname',
        LAST_NAME: 'data.lastname',
        TITLE: 'Mr',
        EMAIL_ADDRESS: 'email7@mail.com',
        CV_CODE: 'data',
        STATUS: 0,
        EFFECTIVE_DATE: '10-MAR-20',
        ACCESS_DATE: '10-MAR-20',
        CREATE_DATE: '10-MAR-20',
      },
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
    console.log(res)
  }

  const notify = () => {
    toast.error('Login Fail ไม่พบบัญชีนี้', {
      position: toast.POSITION.TOP_CENTER,
    })
  }

  const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // setLoading(!loading)
    history.replace('/register')
  }

  const isSelectedRadio = (id: number): boolean => {
    if (id === selectedTitle) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white w-mobile md:w-tablet h-custom1 rounded-xl">
        <h1 className="mt-10 text-3xl text-center text-sepia-800">Sing Up</h1>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded-xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-between mb-1">
            <div className="w-45">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="FistName">
                First Name
              </label>
              <input {...register('firstname')} className="w-full px-3 py-2 mb-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="FirstName" type="text" placeholder="FirstName" />
              {errors.firstname ? <p className="text-xs italic text-red-500">{errors.firstname?.message}</p> : <p className="text-xs italic text-transparent">{'_'}</p>}
            </div>
            <div className="w-45">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input {...register('lastname')} className="w-full px-3 py-2 mb-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="LastName" type="text" placeholder="LastName" />
              {errors.lastname ? <p className="text-xs italic text-red-500">{errors.lastname?.message}</p> : <p className="text-xs italic text-transparent">{'_'}</p>}
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <label className="inline-flex items-center ">
              <input type="radio" className="w-5 h-5 text-gray-600 form-radio" checked={isSelectedRadio(1)} onChange={() => setSelectedTitle(1)} />
              <span className="ml-2 text-gray-700">Mr</span>
            </label>
            <label className="inline-flex items-center ml-2">
              <input type="radio" className="w-5 h-5 text-red-600 form-radio" checked={isSelectedRadio(2)} onChange={() => setSelectedTitle(2)} />
              <span className="ml-2 text-gray-700">Miss</span>
            </label>
            <label className="inline-flex items-center ml-2">
              <input type="radio" className="w-5 h-5 text-orange-600 form-radio" checked={isSelectedRadio(3)} onChange={() => setSelectedTitle(3)} />
              <span className="ml-2 text-gray-700">Mrs</span>
            </label>
          </div>

          <div className="flex flex-row justify-between mb-1">
            <div className="w-45">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="FistName">
                Username
              </label>
              <input {...register('username')} className="w-full px-3 py-2 mb-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="Username" type="text" placeholder="Username" />
              {errors.username ? <p className="text-xs italic text-red-500">{errors.username?.message}</p> : <p className="text-xs italic text-transparent">{'_'}</p>}
            </div>
            <div className="w-45">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="cvcode">
                CV CODE
              </label>
              <input {...register('cvcode')} className="w-full px-3 py-2 mb-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="cvcode" type="text" placeholder="cvcode" />
              {errors.cvcode ? <p className="text-xs italic text-red-500">{errors.cvcode?.message}</p> : <p className="text-xs italic text-transparent">{'_'}</p>}
            </div>
          </div>
          <div className="mb-1">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="FistName">
              Email
            </label>
            <input {...register('email')} className="w-full px-3 py-2 mb-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="Password" type="email" placeholder="Email" />
            {errors.email ? <p className="text-xs italic text-red-500">{errors.email?.message}</p> : <p className="text-xs italic text-transparent">{'_'}</p>}
          </div>
          <div className="flex flex-row justify-between mb-1">
            <div className="w-45">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Password">
                Password
              </label>
              <input
                {...register('password')}
                className="w-full px-3 py-2 mb-1 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              {errors.password ? <p className="text-xs italic text-red-500">{errors.password?.message}</p> : <p className="text-xs italic text-transparent">{'_'}</p>}
            </div>
            <div className="w-45">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="ConfirmPassword">
                Confirm Password
              </label>
              <input
                {...register('confirmPassword')}
                className="w-full px-3 py-2 mb-1 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="ConfirmPassword"
                type="password"
                placeholder="******************"
              />
              {errors.confirmPassword ? <p className="text-xs italic text-red-500">{errors.confirmPassword?.message}</p> : <p className="text-xs italic text-transparent">{'_'}</p>}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <button onClick={() => history.replace('/')} className="w-2/5 px-4 py-2 font-bold text-white rounded bg-sepia-500 hover:bg-sepia-700 focus:outline-none focus:shadow-outline" type="button">
              Back
            </button>
            <button className="w-2/5 px-4 py-2 font-bold text-white rounded bg-sepia-500 hover:bg-sepia-700 focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  )
}

export default Register
