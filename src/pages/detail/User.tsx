import React, { MouseEvent, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, addUser ,fetchUserAPI ,loading} from '../../redux/reducers/userSlice'

const User: React.FunctionComponent = () => {
  const users = useSelector(selectUser)
  const loadingData = useSelector(loading)
  console.log(users)
  const dispatch = useDispatch()

  const handleClick = (e: MouseEvent<HTMLHeadingElement>) => {
    e.preventDefault()
    dispatch(
      addUser({
        id: 5,
        name: '5Patricia Lebsack',
        username: '5Karianne',
        email: '5Julianne.OConner@kory.org',
        address: {
          street: '5Hoeger Mall',
          suite: '5Apt. 692',
          city: '5South Elvis',
          zipcode: '55553919-4257',
          geo: {
            lat: 5529.4572,
            lng: -55164.299,
          },
        },
      })
    )
    
  }

  useEffect(() => {
    dispatch(fetchUserAPI())   // createAsyncThunk
  }, [])

  return (
    <div>
      <h1 onClick={handleClick}>Hello user</h1>
      {loadingData?
        users.map((e) => (
          <div key={e.id} className="py-2 my-2 bg-gray-300">
            <h1>{e.email}</h1>
            <h1>{e.id}</h1>
            <h1>{e.name}</h1>
            <h1>{e.username}</h1>
          </div>
        )):<h1>Loading.....</h1>
      }
    </div>
  )
}

export default User
