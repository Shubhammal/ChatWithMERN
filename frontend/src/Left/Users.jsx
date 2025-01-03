import React from 'react'
import User from './User'
import UserGetAllUsers from '../context/UserGetAllUsers.jsx'

function Users() {
  const [allUser, loading] = UserGetAllUsers();
  return (
    <div className='overflow-y-auto scrollbar-hide ' style={{maxHeight:'calc(84vh - 3vh)'}}>
    { allUser.map((user, index)=>{
      return <User key={user._id || index} user = {user}/>
    })
  }
  
    </div>
  )
}

export default Users;