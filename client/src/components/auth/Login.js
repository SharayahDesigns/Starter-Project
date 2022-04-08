import React,{useContext, useState} from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const Login = () => {
  const [email,setEmail] = useState('test@test.com')
  const [password,setPassword] = useState('123456')
  const [name, setName]= useState('')
  const auth = useContext(AuthContext)
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    auth.handleLogin({email, password})
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* <p>Name:</p>
        <input value={name} onChange={(e) => setName(e.target.value)} /> */}
      <p>Email:</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password:</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        
        <button>Login</button>
        
      
      </form>
    </div>
  )
}

export default Login



