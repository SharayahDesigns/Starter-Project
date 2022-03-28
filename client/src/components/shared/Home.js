import React, {useContext} from 'react'
import {AuthContext} from '../../providers/AuthProvider'

const Home = () => {
  let auth = useContext(AuthContext)
  if(!auth.user) {
  return <p>Todo: should not be able to Come her redircet to LOGIN page</p>
  }
  return (
    <div>
      <h1>My Home </h1>
      <p>Hello {auth.user.email}</p>
      <p>{JSON.stringify(auth)}</p>
    </div>
  )
}
export default Home

