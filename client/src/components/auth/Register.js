import React,{useContext, useState} from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const Register = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name, setName]= useState('')
  const auth = useContext(AuthContext)
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    auth.handleRegister({email, password, name})
  }
  
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Email:</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password:</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        
        <button>Register</button>
        
      
      </form>
    </div>
  )
}

export default Register

