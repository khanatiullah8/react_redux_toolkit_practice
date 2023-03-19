import React, { useEffect, useState } from 'react'
import { fetchUser } from './userSlice'
import { useSelector, useDispatch } from 'react-redux'

const User = () => {

  const [page, setPage] = useState(1);
  
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.users.results)
  const info = useSelector((state) => state.user.users.info)
  const fetchError = useSelector((state) => state.user.error)

  console.log(fetchError);

  useEffect(()=>{
    dispatch(fetchUser(`https://randomuser.me/api/?results=5&page=${page}`))
  }, [page])

  const prevPage = () => {
    if(page < 1) setPage(1)
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  return (
    <>
      <h2>User list</h2>
      <div className='user-controls'>
        <button onClick={()=>prevPage()}>Prev</button>
        <span>{info && info.page}</span>
        <button onClick={()=>nextPage()}>Next</button>
      </div>
      <ul className="user-lists">
      {
        users && fetchError === '' ? users.map((user, i) => {
          const {gender, dob:{age}, location:{country}, name: {first, last}, picture:{medium}} = user;
          return <li key={i} className="random-user">
            <h3>Name: {first} {last}</h3>
            <h4>Gender: {gender}</h4>
            <h4>Age: {age}</h4>
            <h4>Country: {country}</h4>
            <figure>
              <img src={medium} alt={`${first} ${last}`} />
            </figure>
          </li>
        }) : <li className='error-msg'><span>{fetchError}</span></li>
      }
      </ul>
    </>
  )
}

export default User